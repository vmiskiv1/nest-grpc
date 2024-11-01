import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import {
  UserServiceController,
  CreateUserDto,
  UpdateUserDto,
  UserServiceControllerMethods,
  FindOneUserDto,
  PaginationDto,
} from '@app/common';
import { Observable } from 'rxjs';

@Controller()
@UserServiceControllerMethods()
export class UsersController implements UserServiceController {
  constructor(private readonly usersService: UsersService) {}

  createUser(dto: CreateUserDto) {
    return this.usersService.create(dto);
  }

  findAllUsers() {
    return this.usersService.findAll();
  }

  findOneUser(dto: FindOneUserDto) {
    return this.usersService.findOne(dto.id);
  }

  updateUser(dto: UpdateUserDto) {
    return this.usersService.update(dto.id, dto);
  }

  removeUser(dto: FindOneUserDto) {
    return this.usersService.remove(dto.id);
  }

  queryUsers(dtoPaginationStream: Observable<PaginationDto>) {
    return this.usersService.queryUsers(dtoPaginationStream);
  }
}
