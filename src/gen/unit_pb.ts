// @generated by protoc-gen-es v1.7.2 with parameter "target=ts"
// @generated from file unit.proto (package unit, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message unit.CreateUnitRequest
 */
export class CreateUnitRequest extends Message<CreateUnitRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: string unit_class = 2;
   */
  unitClass = "";

  /**
   * @generated from field: string unit_function = 3;
   */
  unitFunction = "";

  /**
   * @generated from field: string function_block = 4;
   */
  functionBlock = "";

  constructor(data?: PartialMessage<CreateUnitRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "unit.CreateUnitRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "unit_class", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "unit_function", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "function_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateUnitRequest {
    return new CreateUnitRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateUnitRequest {
    return new CreateUnitRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateUnitRequest {
    return new CreateUnitRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateUnitRequest | PlainMessage<CreateUnitRequest> | undefined, b: CreateUnitRequest | PlainMessage<CreateUnitRequest> | undefined): boolean {
    return proto3.util.equals(CreateUnitRequest, a, b);
  }
}

/**
 * @generated from message unit.CreateUnitReply
 */
export class CreateUnitReply extends Message<CreateUnitReply> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: string unit_class = 2;
   */
  unitClass = "";

  /**
   * @generated from field: string unit_function = 3;
   */
  unitFunction = "";

  /**
   * @generated from field: string function_block = 4;
   */
  functionBlock = "";

  constructor(data?: PartialMessage<CreateUnitReply>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "unit.CreateUnitReply";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "unit_class", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "unit_function", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "function_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateUnitReply {
    return new CreateUnitReply().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateUnitReply {
    return new CreateUnitReply().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateUnitReply {
    return new CreateUnitReply().fromJsonString(jsonString, options);
  }

  static equals(a: CreateUnitReply | PlainMessage<CreateUnitReply> | undefined, b: CreateUnitReply | PlainMessage<CreateUnitReply> | undefined): boolean {
    return proto3.util.equals(CreateUnitReply, a, b);
  }
}

