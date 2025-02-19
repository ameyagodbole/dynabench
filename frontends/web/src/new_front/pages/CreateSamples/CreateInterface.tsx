import AnnotationTitle from "../../components/CreateSamples/CreateSamples/AnnotationTitle";
import CreateInterfaceHelpersButton from "new_front/components/Buttons/CreateInterfaceHelpersButton";
import AnnotationContextStrategy from "new_front/components/CreateSamples/CreateSamples/AnnotationInterfaces/Contexts/AnnotationContextStrategy";
import AnnotationGoalStrategy from "new_front/components/CreateSamples/CreateSamples/AnnotationInterfaces/Goals/AnnotationGoalStrategy";
import AnnotationUserInputStrategy from "new_front/components/CreateSamples/CreateSamples/AnnotationInterfaces/UserInput/AnnotationUserInputStrategy";
import AnnotationButtonActions from "../../components/CreateSamples/CreateSamples/AnnotationButtonActions";
import ResponseInfo from "new_front/components/CreateSamples/CreateSamples/ResponseInfo";
import { OverlayContext } from "new_front/components/OverlayInstructions/Provider";
import {
  ConfigurationTask,
  InfoContextTask,
} from "new_front/types/createSamples/createSamples/configurationTask";
import { ModelOutputType } from "new_front/types/createSamples/createSamples/modelOutput";
import { TaskInfoType } from "new_front/types/task/taskInfo";
import { checkUserIsLoggedIn } from "new_front/utils/helpers/functions/LoginFunctions";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import UserContext from "containers/UserContext";
import { PacmanLoader } from "react-spinners";
import useFetch from "use-http";
import { CreateInterfaceProvider } from "new_front/context/CreateInterface/Context";

const CreateInterface = () => {
  const [modelOutput, setModelOutput] = useState<ModelOutputType>();
  const [modelInTheLoop, setModelInTheLoop] = useState<string>("");
  const [partialSampleId, setPartialSampleId] = useState<number>(0);
  const [taskConfiguration, setTaskConfiguration] =
    useState<ConfigurationTask>();
  const [taskContextInfo, setTaskContextInfo] = useState<InfoContextTask>();
  const [taskInfo, setTaskInfo] = useState<TaskInfoType>();
  const [taskId, setTaskId] = useState<number>(0);
  const [isGenerativeContext, setIsGenerativeContext] =
    useState<boolean>(false);
  const { hidden, setHidden } = useContext(OverlayContext);
  const { get, post, response, loading } = useFetch();
  let { taskCode } = useParams<{ taskCode: string }>();
  const { user } = useContext(UserContext);
  const history = useHistory();

  const loadTaskContextData = async () => {
    const taskId = await get(`/task/get_task_id_by_task_code/${taskCode}`);
    const [taskContextInfo, taskConfiguration, modelInTheLoop, taskInfo] =
      await Promise.all([
        post(`/context/get_context`, {
          task_id: taskId,
        }),
        get(`/context/get_context_configuration?task_id=${taskId}`),
        post(`/model/get_model_in_the_loop`, {
          task_id: taskId,
        }),
        get(`/task/get_task_with_round_info_by_task_id/${taskId}`),
      ]).then();
    if (response.ok) {
      setTaskContextInfo(taskContextInfo);
      setTaskConfiguration(taskConfiguration);
      setModelInTheLoop(modelInTheLoop);
      setTaskInfo(taskInfo);
      setTaskId(taskId);
      setIsGenerativeContext(
        taskConfiguration.context.generative_context?.is_generative
      );
    }
  };

  const handleData = async () => {
    const isLogin = await checkUserIsLoggedIn(
      history,
      `/tasks/${taskCode}/create`
    );
    if (isLogin) {
      loadTaskContextData();
    }
  };

  useEffect(() => {
    handleData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading || !taskContextInfo || !taskConfiguration || !taskInfo ? (
        <div className="flex items-center justify-center h-screen">
          <PacmanLoader color="#ccebd4" loading={loading} size={50} />
        </div>
      ) : (
        <CreateInterfaceProvider>
          <div className="container">
            <div id="title">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <AnnotationTitle
                    taskName={taskInfo?.name!}
                    subtitle={`${
                      taskConfiguration?.creation_samples_title
                        ? taskConfiguration?.creation_samples_title
                        : "Find examples that fool the model"
                    }`}
                  />
                </div>
                <div className="flex items-start justify-end pr-4 pt-14">
                  <CreateInterfaceHelpersButton
                    generalInstructions={taskInfo?.instructions_md!}
                  />
                </div>
              </div>
            </div>
            <div className="border p-2">
              <div id="goal">
                {taskConfiguration?.goal && (
                  <AnnotationGoalStrategy
                    config={taskConfiguration?.goal as any}
                    hidden={hidden}
                  />
                )}
              </div>
              <div id="context" className="p-3 mb-1 rounded">
                <h6 className="text-[15px] text-[#005798] font-bold pl-2">
                  CONTEXT:
                </h6>
                {taskConfiguration?.context && (
                  <AnnotationContextStrategy
                    config={taskConfiguration?.context as any}
                    context={taskContextInfo?.current_context}
                    contextId={taskContextInfo?.context_id}
                    taskId={taskInfo?.id}
                    realRoundId={taskContextInfo?.real_round_id}
                    hidden={hidden}
                    setPartialSampleId={setPartialSampleId}
                    setIsGenerativeContext={setIsGenerativeContext}
                  />
                )}
              </div>
              <div id="inputUser" className="p-3">
                {taskConfiguration?.user_input && (
                  <AnnotationUserInputStrategy
                    config={taskConfiguration?.user_input as any}
                    isGenerativeContext={isGenerativeContext}
                    hidden={hidden}
                  />
                )}
              </div>
              <div id="buttons">
                {taskContextInfo && taskConfiguration && (
                  <AnnotationButtonActions
                    modelInTheLoop={modelInTheLoop}
                    contextId={taskContextInfo?.context_id}
                    tags={taskContextInfo?.tags}
                    realRoundId={taskContextInfo?.real_round_id}
                    currentContext={taskContextInfo?.current_context}
                    taskID={taskId}
                    inputByUser={
                      taskConfiguration?.response_fields?.input_by_user
                    }
                    modelPredictionLabel={
                      taskConfiguration?.model_output?.model_prediction_label
                    }
                    modelEvaluationMetricInfo={
                      taskConfiguration?.model_evaluation_metric
                    }
                    partialSampleId={partialSampleId}
                    neccessaryFields={taskConfiguration.required_fields}
                    isGenerativeContext={isGenerativeContext}
                    userId={user.id!}
                    setModelOutput={setModelOutput}
                  />
                )}
              </div>
              <div id="responseInfo">
                {modelOutput && (
                  <ResponseInfo
                    label={modelOutput.label}
                    input={modelOutput.input}
                    prediction={modelOutput.prediction}
                    probabilities={modelOutput.probabilities}
                    fooled={modelOutput.fooled}
                  />
                )}
              </div>
            </div>
          </div>
        </CreateInterfaceProvider>
      )}
    </>
  );
};

export default CreateInterface;
