import type {NextConfig} from "next";
import {exec} from "child_process";
import _ from "lodash";

const config = async (phase: string) => {
    const config: NextConfig = {
        env: {
            BUILD_SHA: await new Promise((resolve) => {
                exec("git describe --abbrev=11 --always --dirty --first-parent --long --tags",
                    (err, stdout) => {
                        if (err) {
                            resolve("unknown");
                        }
                        resolve(_.trim(stdout));
                    });
            }),
            BUILD_TIMESTAMP: new Date().toISOString(),
        },
    };
    if ("phase-development-server" !== phase) {
        config.output = "export";
    }
    return config;
}

export default config;
