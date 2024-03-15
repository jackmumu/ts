// import { EventWrapper } from "../defined";
// interface Events {
//     /** 菜单事件 */
//     menu: (args: {
//         /** 点击坐标: 相对于视口 */
//         point?: Point;
//         /** 点击目标, 如果没有则为点击了空白 */
//         target?: Array<Tar>;
//     }) => void;

//     /** 组件激活 */
//     active: (args: {
//         /** 激活的组件, 至少包含一个组件 */
//         target: Array<Tar>;
//     }) => void;

//     /** 组件失去活性 */
//     deactive: (args: {
//         /** 激活的组件, 至少包含一个组件 */
//         target: Array<Tar>;
//     }) => void;

//     /** 组件已被修改 */
//     modified: (args: {
//         /** 激活的组件, 至少包含一个组件 */
//         target: Array<Tar>;
//         /** 相对于开始的偏移量 */
//         offset: Point;
//     }) => void;
//     /** 组件选中类型 */
//     pressed: (args: { target: Array<Tar>; data: { dx: number; dy: number; type: number } }) => void;
//     /** 组件正在移动 */
//     moving: (args: {
//         /** 激活的组件, 至少包含一个组件 */
//         target: Array<Tar>;
//         data: { dx: number; dy: number; type: number };
//     }) => void;
// }
// export class MoveManager extends EventWrapper<Events> implements closeable{

// }