// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import {
  TextEncoder as NodeTextEncoder,
  TextDecoder as NodeTextDecoder,
} from "util";
import { fetch, Request, Response } from "@remix-run/web-fetch";
import { AbortController as NodeAbortController } from "abort-controller";

globalThis.fetch = fetch;
globalThis.Request = Request;
globalThis.Response = Response;
globalThis.AbortController = NodeAbortController;
globalThis.TextEncoder = NodeTextEncoder;
globalThis.TextDecoder = NodeTextDecoder;
