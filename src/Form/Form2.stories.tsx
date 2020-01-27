// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import Hierarchy from '../../.storybook/hierarchyGroups';
// import Form from './Form';
// import FormContext from './context';
// import Checkbox from './Elements/Checkbox';
// import Input from './Elements/Input';

// const storeValuesInLocalStorage = ({ id, values }) => {
//     localStorage.setItem(id, JSON.stringify(values));
// };

// const restoreValuesFromLocalStorage = ({ id, initialValues, setValues }) => {
//     const values = JSON.parse(localStorage.getItem(id)) || initialValues;
//     setValues(values);
// };

// const ShowValues = () => {
//     const { values } = React.useContext(FormContext);
//     return <pre>{JSON.stringify(values, null, 2)}</pre>;
// };

// storiesOf(`${Hierarchy.COMPONENTS}|Form`, module).add('default', () => (
//     <Form
//         id="exampleForm"
//         onSubmit={(...data) => {
//             console.log(data);
//         }}
//         onUpdate={(params) => {
//             console.log(params);
//         }}
//         onMount={restoreValuesFromLocalStorage}
//         onUnmount={storeValuesInLocalStorage}
//         initialValues={{
//             text: 'hello!',
//             notif: ['messages'],
//             'notifications[alerts]': 'on',
//         }}
//     >
//         <p>
//             <label>
//                 <Checkbox name="newsletter1" value="1" /> Newsletter 1
//             </label>
//         </p>
//         <p>
//             <label>
//                 <Checkbox name="newsletter2" value="2" /> Newsletter 2
//             </label>
//         </p>
//         <p>
//             <label>
//                 <Checkbox name="notif" value="alerts" /> notif = alerts
//             </label>
//         </p>
//         <p>
//             <label>
//                 <Checkbox name="notif" value="news" /> notif = news
//             </label>
//         </p>
//         <p>
//             <label>
//                 <Checkbox name="notif" value="messages" /> notif = messages
//             </label>
//         </p>
//         <p>
//             <label>
//                 <Checkbox name="notifications[alerts]" /> notifications[alerts]
//             </label>
//         </p>
//         <p>
//             <label>
//                 <Checkbox name="notifications[messages]" />{' '}
//                 notifications[messages]
//             </label>
//         </p>
//         <p>
//             <label>
//                 <Checkbox name="notifications[other]" value="1" />{' '}
//                 notifications[other] = 1
//             </label>
//         </p>
//         <Input name="text" />
//         <input type="submit" />
//         <ShowValues />
//     </Form>
// ));
