/*
 * @Author: xiongfeng '343138759@qq.com'
 * @Date: 2022-05-06 14:30:54
 * @LastEditors: xiongfeng '343138759@qq.com'
 * @LastEditTime: 2022-05-10 11:11:58
 * @FilePath: \Typescript练习d:\王者农药plus\web前端\慕课网react项目\jira\src\wdyr.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";

if (process.env.NODE_ENV === "development") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React, {
    trackAllPureComponents: false,
  });
}
