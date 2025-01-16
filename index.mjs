// actions core
import core from "@actions/core";
import { pushUrlsCache } from "@tardis-ksh/tencent/cdn";

const inputs = {
  Urls: core.getInput("Urls")?.split(/\s+/).filter(Boolean),
  UrlEncode: core.getInput("UrlEncode"),
  Area: core.getInput("Area"),
  UserAgent: core.getInput("UserAgent"),
  Layer: core.getInput("Layer"),
};

Object.entries(inputs).forEach(([key, value]) => {
  if (value === "") {
    delete inputs[key];
  }
});

const credentials = {
  secretId: core.getInput("secret_id"),
  secretKey: core.getInput("secret_key"),
};

// console.log(inputs, "tencent cdn purge cache user inputs");

pushUrlsCache(credentials, inputs);
