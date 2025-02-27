import type { MarkdownTransformContext } from '@slidev/types'
import { defineTransformersSetup } from '@slidev/types'

function sup(ctx: MarkdownTransformContext) {
    ctx.s.replace(
      /(?<=[\S]+)\^(-?[\w]+)/gm,
      (match, sup) => {
        return `<sup>${sup}</sup>`
      },
    )
  }

  function sub(ctx: MarkdownTransformContext) {
    ctx.s.replace(
      /(?<=[\S]+)\_([\w]+)/gm,
      (match, sub) => {
        return `<sub>${sub}</sub>`
      },
    )
  }

  function colorPreview(ctx: MarkdownTransformContext) {
    ctx.s.replace(
      /`((#[0-9A-F]{3,6})|(rgba?\((\s*[0-9]{1,3}\s*,?)*\)))`/gm,
      (match, color) => {
        return `<span class="color-preview" style="display:inline-block;width:1em;height:1em;border:1px solid currentColor;background-color:${color}"></span>${match}`
      },
    )
  }

export default defineTransformersSetup(() => {
  return {
    pre: [colorPreview],
    preCodeblock: [],
    postCodeblock: [],
    post: [ sup, sub ],
  }
})