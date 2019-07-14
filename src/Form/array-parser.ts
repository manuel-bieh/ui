// const value = 'placeholder';
// var name = 'users:test[admins][superadmins][]';
// var name = 'users-test[admins][superadmins][]';
// var name = 'users_test[admins][superadmins][]';
// var name = 'users[admins][superadmins][]';
// var [fieldName, arrayParams = ''] = name.split(/^([^\[\]]*)/).filter(Boolean);
// arrayParams.split(/(\[[\w-:_]*\])/).filter(Boolean);

// var name = 'users[admins][superadmins]';
// var name = 'users[admins][superadmins]';
// var [fieldName, arrayParams = ''] = name.split(/^([^\[\]]*)/).filter(Boolean);
// var arrayParams = arrayParams.split(/(\[[^(\[|\])]*\])/).filter(Boolean);
// const obj = {};
// const reduxed = [fieldName, ...arrayParams].reduce(
//     (acc, fieldName, index, array) => {
//         const [obj, last] = acc;
//         const next = last ? last : obj;
//         const [, cleanName] = fieldName.match(/^\[(.*)\]$/) || [
//             null,
//             fieldName,
//         ];
//         if (fieldName !== '[]') {
//             next[cleanName] =
//                 array[index + 1] === '[]' && array.length - 1 === index + 1
//                     ? []
//                     : {};
//         }
//         return array.length - 1 === index ? obj : [obj, next[cleanName]];
//     },
//     [{}]
// );

// console.log(reduxed);

// 'a.b.c'.split('.').reduce((acc, name, index, array) => {
//   const [obj, last] = acc;
//   const next = last ? last : obj;
//   next[name] = {};
//   return array.length - 1 === index ? obj : [obj, next[name]];
// }, [{}])

//     if (item !== '[]') {
//         next[item] = array[index + 1] === '[]' && array.length - 1 === index + 1 ? [] : {};
//         return next[item];
//     }
//     return next;
// }, obj);
// console.log(obj);
// var name = 'users[admins][superadmins]';
// var [fieldName, arrayParams = ''] = name.split(/^([^\[\]]*)/).filter(Boolean);
// console.log(fieldName);
// var arrayParams = arrayParams.split(/(\[[^(\[|\])]*\])/).filter(Boolean);
// var obj = {};
// var reduxed = [fieldName, ...arrayParams].reduce((next, item, index, array) => {
//     if (item !== '[]') {
//         next[item] = array[index + 1] === '[]' && array.length - 1 === index + 1 ? [] : {};
//         return next[item];
//     }
//     return next;
// }, obj);
// console.log(obj);

// var obj = {
//   [fieldName]: arrayParams.length === 0 ? null : arrayParams.reduce((next, item) => {
//       if (item !== '[]') {
//           next[item] = {};
//       }
//       return next;
//   }, obj[fieldName])
// }

// var name = 'users';
// var values = {
//     users: value,
// };

// var name = 'users[]';
// var values = {
//     users: [value],
// };

// var name = 'users[admins][superadmins][]';
// var values = {
//     users: {
//         admins: {
//             superadmins: [],
//         },
//     },
// };

// var name = 'users[admins][superadmins][1]';
// var values = {
//     users: {
//         admins: {
//             superadmins: { 1: value },
//         },
//     },
// };
