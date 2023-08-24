export function load({ params }) {
  const route = params.route;

  const pages = {
    test: [
      {
        type: "button/Button",
        props: {
          color: "primary",
        },
        slot: ["This is Test Page"],
      },
    ],
    users: [
      {
        type: "el/El",
        props: {
          color: "primary",
        },
        slot: [
          "This is Users page",
          {
            type: "el/El",
            props: {
              p: "4",
              bgColor: "success",
              bgOpacity: "10",
            },
            slot: [
              {
                type: "el/El",
                props: {
                  tag: "a",
                  href: "/users/1",
                },
                slot: ["User 1"],
              },
              {
                type: "el/El",
                props: {
                  tag: "a",
                  href: "/users/2",
                },
                slot: ["User 2"],
              },
            ],
          },
        ],
      },
    ],
    "users/1": [
      {
        type: "el/El",
        props: {
          p: "md",
        },
        slot: [
          "This is User 1 page",
          {
            type: "el/El",
            props: {
              p: "4",
              bgColor: "orange",
              bgOpacity: "10",
            },
            slot: [
              {
                type: "el/El",
                props: {
                  tag: "a",
                  href: "/users",
                },
                slot: ["Back"],
              },
            ],
          },
        ],
      },
    ],
    "users/2": [
      {
        type: "el/El",
        props: {
          p: "md",
        },
        slot: [
          "This is User 2 page",
          {
            type: "el/El",
            props: {
              p: "4",
              bgColor: "azure",
              bgOpacity: "10",
            },
            slot: [
              {
                type: "el/El",
                props: {
                  tag: "a",
                  href: "/users",
                },
                slot: ["Back"],
              },
            ],
          },
        ],
      },
    ],
    about: [
      {
        type: "badge/Badge",
        props: {
          color: "info",
          ghost: true,
        },
        slot: ["This is about page"],
      },
    ],
  };

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
