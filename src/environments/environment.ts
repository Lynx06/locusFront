// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,

  // Routes Curso
  apiGetCurso: "https://jsonplaceholder.typicode.com/posts/",
  apiPostCurso: "",
  apiPutCurso: "",
  apiDeleteCurso: "",

  // Routes Sala
  apiGetSala: "https://jsonplaceholder.typicode.com/posts/",
  apiPostSala: "",
  apiPutSala: "",
  apiDeleteSala: "",

  // Routes Turma
  apiGetTurma: "https://jsonplaceholder.typicode.com/posts/",
  apiPostTurma: "",
  apiPutTurma: "",
  apiDeleteTurma: "",

  // Routes Agendamento
  apiGetAgendamento: "https://jsonplaceholder.typicode.com/posts/",
  apiPostAgendamento: "",
  apiPutAgendamento: "",
  apiDeleteAgendamento: "",
};
