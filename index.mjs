// actions core
import core from "@actions/core";
import { pushUrlsCache } from "@tardis-ksh/tencent/cdn";

const inputs = {
  Urls: core.getInput("paths")?.split(/\s+/).filter(Boolean),
  UrlEncode: core.getInput("url_encode"),
  Area: core.getInput("area"),
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
