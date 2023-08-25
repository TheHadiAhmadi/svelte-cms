import {readFile, writeFile} from 'fs/promises'
import {existsSync} from 'fs'


export async function load({ params, edit }) {
  const route = params.route;

  // if(edit)
  if(!existsSync('./pages.json')) {
    await writeFile('./pages.json', '{}')
  }
  const pagesFile = await readFile('./pages.json', 'utf-8')

  const pages = JSON.parse(pagesFile);

  
  
  // slot: [
  //   {
  //     type: "button/Button",
  //     props: {
  //       color: "primary",
  //     },
  //     slot: ["Primary YeSvelte Button"],
  //   },
  //   {
  //     type: "el/El",
  //     props: {
  //       textColor: "primary",
  //     },
  //     slot: ["Content Inside EL"],
  //   },
  //   {
  //     type: "input/Input",
  //     props: {
  //       value: "Initial Value",
  //     },
  //   },
  // ],
  //   const page = {
  //     slot: [
  //       {
  //         type: "Container",
  //         props: { size: "lg" },
  //         slot: [
  //           {
  //             type: "Row",
  //             props: { gutter: "xl" },
  //             slot: [
  //               {
  //                 type: "Col",
  //                 props: {
  //                   col: "12",
  //                   colSm: "6",
  //                 },
  //                 slot: [
  //                   {
  //                     type: "Button",
  //                     props: {
  //                       color: "success",
  //                     },
  //                     slot: ["success"],
  //                   },
  //                   {
  //                     type: "Button",
  //                     props: {
  //                       color: "primary",
  //                     },
  //                     slot: ["primary"],
  //                   },
  //                 ],
  //               },
  //               {
  //                 type: "Col",
  //                 props: {
  //                   col: "12",
  //                   colSm: "6",
  //                 },
  //                 slot: [
  //                   {
  //                     type: "Button",
  //                     props: {
  //                       color: "info",
  //                     },
  //                     slot: ["Info"],
  //                   },
  //                   {
  //                     type: "Button",
  //                     props: {
  //                       color: "primary",
  //                     },
  //                     slot: ["Primary"],
  //                   },
  //                 ],
  //               },
  //               {
  //                 type: "Col",
  //                 props: {
  //                   col: "12",
  //                   colSm: "6",
  //                 },
  //                 slot: [
  //                   {
  //                     type: "Button",
  //                     props: {
  //                       color: "info",
  //                     },
  //                     slot: ["Info"],
  //                   },
  //                   {
  //                     type: "Button",
  //                     props: {
  //                       color: "warning",
  //                     },
  //                     slot: ["warning"],
  //                   },
  //                 ],
  //               },
  //               {
  //                 type: "Col",
  //                 props: {
  //                   col: "12",
  //                   colSm: "6",
  //                 },
  //                 slot: [
  //                   {
  //                     type: "Button",
  //                     props: {
  //                       color: "info",
  //                     },
  //                     slot: ["Info"],
  //                   },
  //                   {
  //                     type: "Button",
  //                     props: {
  //                       color: "error",
  //                     },
  //                     slot: ["Error"],
  //                   },
  //                 ],
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     ],
  //   };

  return {
    page: {
      slot: pages[route],
    }
  };
}
