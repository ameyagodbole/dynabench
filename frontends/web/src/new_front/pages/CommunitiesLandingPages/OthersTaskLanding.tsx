import React, { FC } from "react";
import useTasks from "../../hooks/useTasks";
import TaskCard from "../../components/Cards/TaskCard";

const OthersTaskLanding: FC = () => {
  const { tasksData, tasksCategories } = useTasks();

  return (
    <div className="container text-center d-block">
      <div className="h-64">
        <h2 className="pt-8 text-6xl font-thin text-letter-color">Others</h2>
        <h5 className="pt-2 text-2xl font-thin text-letter-color">
          Other Dynabench tasks
        </h5>
      </div>
      <div>
        <div>
          <p className="text-xl font-normal text-letter-color">
            These tasks do not fall in a specific category yet.
          </p>
        </div>
        <div className="pt-4">
          <div>
            <div
              className="grid grid-cols-1 gap-4 pb-2 md:grid-cols-4"
              key="Dataperf"
            >
              {tasksData
                .filter((t) => t.challenge_type === 4)
                .map((task) => (
                  <div key={task.id}>
                    <TaskCard
                      id={task.id}
                      name={task.name}
                      description={task.desc}
                      curRound={task.cur_round}
                      totalCollected={task.round.total_collected}
                      totalFooled={task.round.total_fooled}
                      taskCode={task.task_code}
                      imageUrl={task.image_url}
                      tasksCategories={tasksCategories}
                      isBuilding={task.is_building}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OthersTaskLanding;
