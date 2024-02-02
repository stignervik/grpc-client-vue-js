// @generated by protoc-gen-connect-es v1.3.0 with parameter "target=ts"
// @generated from file unit.proto (package unit, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateUnitReply, CreateUnitRequest } from "./unit_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service unit.Unit
 */
export const Unit = {
  typeName: "unit.Unit",
  methods: {
    /**
     * @generated from rpc unit.Unit.CreateUnit
     */
    createUnit: {
      name: "CreateUnit",
      I: CreateUnitRequest,
      O: CreateUnitReply,
      kind: MethodKind.Unary,
    },
  }
} as const;

