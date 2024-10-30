// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v3.20.3
// source: proto/auth.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export const protobufPackage = "auth";

export interface PaginationDto {
  page: number;
  skip: number;
}

export interface UpdateUserDto {
  id: string;
  SocialMedia: SocialMedia | undefined;
}

export interface FindOneUserDto {
  id: string;
}

export interface Empty {
}

export interface Users {
  users: User[];
}

export interface CreateUserDto {
  username: string;
  password: string;
  age: number;
}

export interface User {
  id: string;
  username: string;
  password: string;
  age: number;
  subscribed: boolean;
  socialMedia: SocialMedia | undefined;
}

export interface SocialMedia {
  twitterUri?: string | undefined;
  fburi?: string | undefined;
}

function createBasePaginationDto(): PaginationDto {
  return { page: 0, skip: 0 };
}

export const PaginationDto: MessageFns<PaginationDto> = {
  encode(message: PaginationDto, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.page !== 0) {
      writer.uint32(8).int32(message.page);
    }
    if (message.skip !== 0) {
      writer.uint32(16).int32(message.skip);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PaginationDto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaginationDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.page = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.skip = reader.int32();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PaginationDto {
    return {
      page: isSet(object.page) ? globalThis.Number(object.page) : 0,
      skip: isSet(object.skip) ? globalThis.Number(object.skip) : 0,
    };
  },

  toJSON(message: PaginationDto): unknown {
    const obj: any = {};
    if (message.page !== 0) {
      obj.page = Math.round(message.page);
    }
    if (message.skip !== 0) {
      obj.skip = Math.round(message.skip);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PaginationDto>, I>>(base?: I): PaginationDto {
    return PaginationDto.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PaginationDto>, I>>(object: I): PaginationDto {
    const message = createBasePaginationDto();
    message.page = object.page ?? 0;
    message.skip = object.skip ?? 0;
    return message;
  },
};

function createBaseUpdateUserDto(): UpdateUserDto {
  return { id: "", SocialMedia: undefined };
}

export const UpdateUserDto: MessageFns<UpdateUserDto> = {
  encode(message: UpdateUserDto, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.SocialMedia !== undefined) {
      SocialMedia.encode(message.SocialMedia, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateUserDto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateUserDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.SocialMedia = SocialMedia.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateUserDto {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      SocialMedia: isSet(object.SocialMedia) ? SocialMedia.fromJSON(object.SocialMedia) : undefined,
    };
  },

  toJSON(message: UpdateUserDto): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.SocialMedia !== undefined) {
      obj.SocialMedia = SocialMedia.toJSON(message.SocialMedia);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateUserDto>, I>>(base?: I): UpdateUserDto {
    return UpdateUserDto.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateUserDto>, I>>(object: I): UpdateUserDto {
    const message = createBaseUpdateUserDto();
    message.id = object.id ?? "";
    message.SocialMedia = (object.SocialMedia !== undefined && object.SocialMedia !== null)
      ? SocialMedia.fromPartial(object.SocialMedia)
      : undefined;
    return message;
  },
};

function createBaseFindOneUserDto(): FindOneUserDto {
  return { id: "" };
}

export const FindOneUserDto: MessageFns<FindOneUserDto> = {
  encode(message: FindOneUserDto, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FindOneUserDto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindOneUserDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindOneUserDto {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: FindOneUserDto): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindOneUserDto>, I>>(base?: I): FindOneUserDto {
    return FindOneUserDto.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindOneUserDto>, I>>(object: I): FindOneUserDto {
    const message = createBaseFindOneUserDto();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseEmpty(): Empty {
  return {};
}

export const Empty: MessageFns<Empty> = {
  encode(_: Empty, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Empty {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmpty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): Empty {
    return {};
  },

  toJSON(_: Empty): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Empty>, I>>(base?: I): Empty {
    return Empty.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Empty>, I>>(_: I): Empty {
    const message = createBaseEmpty();
    return message;
  },
};

function createBaseUsers(): Users {
  return { users: [] };
}

export const Users: MessageFns<Users> = {
  encode(message: Users, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.users) {
      User.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Users {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUsers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.users.push(User.decode(reader, reader.uint32()));
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Users {
    return { users: globalThis.Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [] };
  },

  toJSON(message: Users): unknown {
    const obj: any = {};
    if (message.users?.length) {
      obj.users = message.users.map((e) => User.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Users>, I>>(base?: I): Users {
    return Users.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Users>, I>>(object: I): Users {
    const message = createBaseUsers();
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateUserDto(): CreateUserDto {
  return { username: "", password: "", age: 0 };
}

export const CreateUserDto: MessageFns<CreateUserDto> = {
  encode(message: CreateUserDto, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    if (message.age !== 0) {
      writer.uint32(24).int32(message.age);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateUserDto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUserDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.username = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.age = reader.int32();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateUserDto {
    return {
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
      age: isSet(object.age) ? globalThis.Number(object.age) : 0,
    };
  },

  toJSON(message: CreateUserDto): unknown {
    const obj: any = {};
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.age !== 0) {
      obj.age = Math.round(message.age);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateUserDto>, I>>(base?: I): CreateUserDto {
    return CreateUserDto.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateUserDto>, I>>(object: I): CreateUserDto {
    const message = createBaseCreateUserDto();
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    message.age = object.age ?? 0;
    return message;
  },
};

function createBaseUser(): User {
  return { id: "", username: "", password: "", age: 0, subscribed: false, socialMedia: undefined };
}

export const User: MessageFns<User> = {
  encode(message: User, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(26).string(message.password);
    }
    if (message.age !== 0) {
      writer.uint32(32).int32(message.age);
    }
    if (message.subscribed !== false) {
      writer.uint32(40).bool(message.subscribed);
    }
    if (message.socialMedia !== undefined) {
      SocialMedia.encode(message.socialMedia, writer.uint32(50).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): User {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.username = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.password = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.age = reader.int32();
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.subscribed = reader.bool();
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.socialMedia = SocialMedia.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
      age: isSet(object.age) ? globalThis.Number(object.age) : 0,
      subscribed: isSet(object.subscribed) ? globalThis.Boolean(object.subscribed) : false,
      socialMedia: isSet(object.socialMedia) ? SocialMedia.fromJSON(object.socialMedia) : undefined,
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.age !== 0) {
      obj.age = Math.round(message.age);
    }
    if (message.subscribed !== false) {
      obj.subscribed = message.subscribed;
    }
    if (message.socialMedia !== undefined) {
      obj.socialMedia = SocialMedia.toJSON(message.socialMedia);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<User>, I>>(base?: I): User {
    return User.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.id = object.id ?? "";
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    message.age = object.age ?? 0;
    message.subscribed = object.subscribed ?? false;
    message.socialMedia = (object.socialMedia !== undefined && object.socialMedia !== null)
      ? SocialMedia.fromPartial(object.socialMedia)
      : undefined;
    return message;
  },
};

function createBaseSocialMedia(): SocialMedia {
  return { twitterUri: undefined, fburi: undefined };
}

export const SocialMedia: MessageFns<SocialMedia> = {
  encode(message: SocialMedia, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.twitterUri !== undefined) {
      writer.uint32(10).string(message.twitterUri);
    }
    if (message.fburi !== undefined) {
      writer.uint32(18).string(message.fburi);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SocialMedia {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSocialMedia();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.twitterUri = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.fburi = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SocialMedia {
    return {
      twitterUri: isSet(object.twitterUri) ? globalThis.String(object.twitterUri) : undefined,
      fburi: isSet(object.fburi) ? globalThis.String(object.fburi) : undefined,
    };
  },

  toJSON(message: SocialMedia): unknown {
    const obj: any = {};
    if (message.twitterUri !== undefined) {
      obj.twitterUri = message.twitterUri;
    }
    if (message.fburi !== undefined) {
      obj.fburi = message.fburi;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SocialMedia>, I>>(base?: I): SocialMedia {
    return SocialMedia.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SocialMedia>, I>>(object: I): SocialMedia {
    const message = createBaseSocialMedia();
    message.twitterUri = object.twitterUri ?? undefined;
    message.fburi = object.fburi ?? undefined;
    return message;
  },
};

export interface UserService {
  CreateUser(request: CreateUserDto): Promise<User>;
  findAllUsers(request: Empty): Promise<User>;
  FindOneUser(request: FindOneUserDto): Promise<User>;
  UpdateUser(request: UpdateUserDto): Promise<User>;
  RemoveUser(request: FindOneUserDto): Promise<User>;
  QueryUsers(request: Observable<PaginationDto>): Observable<Users>;
}

export const UserServiceServiceName = "auth.UserService";
export class UserServiceClientImpl implements UserService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || UserServiceServiceName;
    this.rpc = rpc;
    this.CreateUser = this.CreateUser.bind(this);
    this.findAllUsers = this.findAllUsers.bind(this);
    this.FindOneUser = this.FindOneUser.bind(this);
    this.UpdateUser = this.UpdateUser.bind(this);
    this.RemoveUser = this.RemoveUser.bind(this);
    this.QueryUsers = this.QueryUsers.bind(this);
  }
  CreateUser(request: CreateUserDto): Promise<User> {
    const data = CreateUserDto.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateUser", data);
    return promise.then((data) => User.decode(new BinaryReader(data)));
  }

  findAllUsers(request: Empty): Promise<User> {
    const data = Empty.encode(request).finish();
    const promise = this.rpc.request(this.service, "findAllUsers", data);
    return promise.then((data) => User.decode(new BinaryReader(data)));
  }

  FindOneUser(request: FindOneUserDto): Promise<User> {
    const data = FindOneUserDto.encode(request).finish();
    const promise = this.rpc.request(this.service, "FindOneUser", data);
    return promise.then((data) => User.decode(new BinaryReader(data)));
  }

  UpdateUser(request: UpdateUserDto): Promise<User> {
    const data = UpdateUserDto.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateUser", data);
    return promise.then((data) => User.decode(new BinaryReader(data)));
  }

  RemoveUser(request: FindOneUserDto): Promise<User> {
    const data = FindOneUserDto.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveUser", data);
    return promise.then((data) => User.decode(new BinaryReader(data)));
  }

  QueryUsers(request: Observable<PaginationDto>): Observable<Users> {
    const data = request.pipe(map((request) => PaginationDto.encode(request).finish()));
    const result = this.rpc.bidirectionalStreamingRequest(this.service, "QueryUsers", data);
    return result.pipe(map((data) => Users.decode(new BinaryReader(data))));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
  clientStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Promise<Uint8Array>;
  serverStreamingRequest(service: string, method: string, data: Uint8Array): Observable<Uint8Array>;
  bidirectionalStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Observable<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}