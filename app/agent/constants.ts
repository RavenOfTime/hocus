import type { valueof } from "~/types/utils";

export const PREBUILD_SCRIPT_TEMPLATE = `#!/bin/bash
set -o errexit
set -o pipefail
set -o nounset
set -o xtrace

`;

export type PrebuildTaskStatus = valueof<typeof PrebuildTaskStatus>;
export const PrebuildTaskStatus = {
  Ok: "PREBUILD_TASK_STATUS_OK",
  Error: "PREBUILD_TASK_STATUS_ERROR",
  Cancelled: "PREBUILD_TASK_STATUS_CANCELLED",
} as const;

export const PREBUILD_SSH_KEY_PUBLIC = `ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKk+DZs+E2GlmqUNqTCU9/R0kT/zzBjwBqbPaBtGv3MA hocus@prebuild`;
/** Newline at the end is required */
export const PREBUILD_SSH_KEY_PRIVATE = `-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
QyNTUxOQAAACCpPg2bPhNhpZqlDakwlPf0dJE/88wY8Aamz2gbRr9zAAAAAKhNjl2LTY5d
iwAAAAtzc2gtZWQyNTUxOQAAACCpPg2bPhNhpZqlDakwlPf0dJE/88wY8Aamz2gbRr9zAA
AAAEBdfLm0JaShomfqS+nSpWe959L8tBV4KyEJW8RJL2TTqKk+DZs+E2GlmqUNqTCU9/R0
kT/zzBjwBqbPaBtGv3MAAAAAImdpdHBvZEBodWdvZHV0a2Etcm9vbXMtb2xhZXA1enZidm
oBAgM=
-----END OPENSSH PRIVATE KEY-----
`;