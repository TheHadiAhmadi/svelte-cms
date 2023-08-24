export function load() {
  const page = {
    slot: [
      {
        type: "button/Button",
        props: {
          color: "primary",
        },
        slot: ["Primary YeSvelte Button"],
      },
      {
        type: "el/El",
        props: {
          textColor: "primary",
        },
        slot: ["Content Inside EL"],
      },
      {
        type: "input/Input",
        props: {
          value: "Initial Value",
        },
      },
    ],
  };
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
    page,
  };
}
