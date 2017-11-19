/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
interface NodeRequire {
  context: Function;
}
