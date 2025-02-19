# Copyright (c) MLCommons and its affiliates.
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

from app.infrastructure.repositories.user import UserRepository


class UserService:
    def __init__(self):
        self.user_repository = UserRepository()

    def increment_examples_fooled(self, user_id: int):
        self.user_repository.increment_examples_fooled(user_id)

    def increment_examples_verified(self, user_id: int):
        self.user_repository.increment_examples_verified(user_id)

    def increment_examples_verified_correct(self, user_id: int):
        self.user_repository.increment_examples_verified_correct(user_id)

    def increment_examples_verified_correct_fooled(self, user_id: int):
        self.user_repository.increment_examples_verified_correct_fooled(user_id)

    def increment_examples_verified_incorrect_fooled(self, user_id: int):
        self.user_repository.increment_examples_verified_incorrect_fooled(user_id)

    def increment_examples_created(self, user_id: int):
        self.user_repository.increment_examples_created(user_id)

    def get_user_name_by_id(self, user_id: int):
        return self.user_repository.get_user_name_by_id(user_id)

    def get_by_email(self, email: str):
        return self.user_repository.get_by_email(email)

    def create_user(self, email: str, password: str, username: str):
        return self.user_repository.create_user(email, password, username)

    def get_is_admin(self, user_id: int):
        return self.user_repository.get_is_admin(user_id)
