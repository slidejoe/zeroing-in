---
# You can also start simply with 'default'
theme: ../../personal/slidev-theme-rockdove
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Zeroing in on Number Storage
info: |
  We all know computers “work in binary”, but how does that affect our day-to-day coding? Understand binary basics, the point of floating-point, and dip into decimals and doubles. Learn why 1 + 1 = 10 and 0.1 + 0.2 ≠ 0.3.
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: fade .3s
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
header: "Joe Glombek"

layout: center
class: text-center
---


<style>
  .slidev-layout {
    th em {
        opacity: 0.5;
        font-weight: normal;
        font-style: normal;
    }

    sub {
      opacity: 0.5;
    }
    
    .color-preview {
      border-radius: var(--slidev-code-radius);
      vertical-align: text-bottom;
      margin-right: calc(-1.5 * var(--slidev-code-radius));
      position: relative;
      height: calc(0.9em - 1px) !important;
      padding-top: 0.125rem;
    padding-bottom: 0.125rem;
    width: calc(0.9em + 2 * 0.125rem) !important;
    box-sizing: content-box;


    + code {
      padding-left: calc(1.5 * var(--slidev-code-radius) + 0.375rem) !important;
    }
    }
    
      tr {
    position: relative;
  }
  .truncate {
    position: absolute;
    display: block;
    height: 0.4rem;
    width: 100%;
    line-height: 0;
    overflow:visible;
    bottom: -0.3rem;
    left: 0;
    background-color: white;
    &:before {
      content: '…'
    }
  }
  }
</style>

| H    | T    | U    |
| ---- | ---- | ---- |
| 6    | 6    | 6    |

---
layout: center
class: text-center
---


| 100  | 10   | 1    |
| ---- | ---- | ---- |
| 6    | 6    | 6    |

---
layout: center
class: text-center
---


| 100  | 10   | 1    |
| ---- | ---- | ---- |
| 6    | 6    | 6    |
| 600  | 60   | 6    |

---
layout: center
class: text-center
---
| 10^2 *= 100* | 10^1 *= 10* | 10^0 *= 1* |
| --------------------------------- | -------------------------------- | ------------------------------- |
| 6                                 | 6                                | 6                               |

---
layout: center
class: text-center
---

## “Base 10”

**10**^1<br />⬆️

---
layout: default
---

## Some bassists you might've heard of

![Left: Lee playing the bass guitar in his band The Dysfunctions, Right: Richard playing the electric double bass](/media/bassists.jpg)

---
layout:
---

## Some [bases]{v-mark.underline.orange=0} you might've heard of

<v-clicks>

- [dec]{v-mark.highlight.orange=2}imal
  
  base 10 🤚✋
- [duodec]{v-mark.highlight.orange=3}imal or [dozen]{v-mark.highlight.orange=3}al
  
  base 12 🥚🥚🥚🥚🥚🥚
- [hexadec]{v-mark.highlight.orange=4}imal
  
  base 16 🎨
- [bi]{v-mark.highlight.orange=5}nary
  
  base 2 🚲💻

</v-clicks>

---
---
## Why do computers use binary?

Base 10 has 10 digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

Base 2 has 2 digits: 0, 1

Hey look, that's a bit!

On or off

---
layout: center
class: text-center
---

# Counting in decimal

&hellip;
<v-clicks>

| 10^2 *= 100* | 10^1 *= 10* | 10^0 *= 1* |
| ---------------------- | --------------------- | -------------------- |
|                        |                       | 1                    |
|                        |                       | 2[]{.truncate}       |
|                        |                       | 9                    |
|                        | 1                     | 0[]{.truncate}       |
|                        | 9                     | 9                    |
| 1                      | 0                     | 0                    |

</v-clicks>

---
layout: center
class: text-center
---

# Counting in binary

<v-clicks>

| 2^3 *= 4* | 2^1 *= 2* | 2^0 *= 1* |
| ---- | ---- | ---- |
|      |      | 1    |
|      | 1 | 0   |
|      | 1 | 1 |
| 1 | 0 | 0   |
| 1 | 0   | 1   |
| 1 | 1                              | 0                             |
| 1 | 1                              | 1                              |

</v-clicks>

---
layout: center
---

# Binary

What does `101010`_2 mean?

<v-clicks>

|  | 2^6 *= 32*| 2^5 *= 16*| 2^4 *= 8*| 2^3 *= 4* | 2^2 *= 2* | 2^1 *= 1* |
| -------------- | -------------- | -------------- | -------------- | -------------- | -------------- | -------------- |
| Binary    | 1          | 0          | 1          | 0          | 1          | 0                                    |
| Conversion | 1 &times; 32 | 0 &times; 16 | 1 &times; 8 | 0 &times; 4 | 1 &times; 2 | 0 &times; 1                          |
| Decimal | 32_10 | 0 | 8_10 | 0 | 2_10 | 0                                    |

</v-clicks>

---

32 + 8 + 2 = 

<SlidevVideo v-click autoplay>
  <source src="/media/42.mp4" type="video/mp4" />
</SlidevVideo>

---
layout: intro
class: invert
---

# Hexadecimal side-quest!
*(Yes, we still have time for side-quests in a 10 minute talk)*



---
layout: center
class: text-center
---

<v-clicks>

| 16^1 *= 16* | 16^0 *= 1* |
| ----------- | ---------- |
|             | 1          |
|             | 2[]{.truncate}          |
|             | 9          |
|             | A          |
|             | B          |
|             | C[]{.truncate}          |
|             | F          |
| 1           | 0          |

</v-clicks>

---
layout: two-cols-header
---

## Why use hexadecimal in computing?

1010_2 = 0 + 2 + 0 + 8 = 10_10

10101010_2 = 0 + 2 + 0 + 8 + 0 + 32 + 0 + 128 = 170_10

But in hexadecimal....

10_10 = A_16

170_10 = AA_16

So converting from binary to hexadecimal is easy!

[1 0 1 0]{v-mark.box.orange=1} [ 1 0 1 0]{v-mark.box.orange=2}&nbsp;_2

&nbsp;&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_16

1010_2 = A_16, so 10101010_2 must be AA_16.

---
layout: center
---

# Two hex characters are a byte!

| Red        | Green      | Blue       |
| ---------- | ---------- | ---------- |
| 239_10      | 131_10     | 84_10     |
| EF_16      | 83_16      | 54_16      |
| 11101111_2 | 10000011_2 | 01010100_2 |



Giving us the colour-code `#EF8354` (or `rgb(239, 131, 84)`)

<br />

*3 letter colour codes are cheating, and mean nothing.* <br />
*`#267` = `#226677` Nothing numerically pleasing at all 😔*

---
layout: intro
class: invert
---

/sidequest

---
layout: center
---

# Well, that's all well and good for **whole numbers**...

---
layout: center
---

## Counting fractional numbers in **decimal**

| 10^2 *= 100* | 10^1 *= 10* | 10^0 *= 1* | .    | **10^-1**{v-click} *= 1/10* | **10^-2**{v-click} *=  1/100* | **10^-3**{v-click} *= 1/1000* |
| ------------ | ----------- | ---------- | ---- | -------------- | --------------- | ---------------- |
| 0           | 0           | 3          | .    | 1             | 4              | 1                             |

<v-click>&pi; &approx; 3.141</v-click>

<v-click>

## Counting fractional numbers in binary

| 2^2 *= 4* | 2^1 *= 2* | 2^0 *= 1* | .    | 2^-1 *= 1/2* | 2^-2 *=  1/4* | 2^-3*= 1/8* |
| ------------ | ----------- | ---------- | ---- | -------------- | --------------- | ---------------- |
| 0          | 1         | 1          | .    | 0             | 0               | 1                |

</v-click>

<v-click>&pi; &approx; 3.125</v-click>

---
layout: center
---

## Recursion in decimal

In base 10, $\frac{1}{3}$ is a bit of a problem...

| 10^0 | .    | 10^-1 | **10^-2** | 10^-3 | 10^-4 | 10^-5 | 10^-6 | 10^-7 |
| ------------ | ----------- | ---------- | ---- | -------------- | --------------- | ---------------- | ---------------- | ---------------- |
| 0          | .          | 3          | 3    | 3             | 3              | 3                             | 3                            | 3                            |


$\frac{1}{3} = 0.\overline{3}_{10} \approx 0.3333333_{10}$

---
layout: center
---

## Recursion in binary
In base 2, $\frac{1}{3}$ is **still** problem... 

| 2^0 | .    | 2^-1 | 2^-2 | 2^-3 | 2^-4 | 2^-5 | 2^-6 | 2^-7 |
| ------------ | ----------- | ---------- | ---- | -------------- | --------------- | ---------------- | ---------------- | ---------------- |
| 0          | .          | 0          | 1    | 0             | 1             | 0                             | 1                            | 0                            |

$\frac{1}{3} = 0.\overline{10}_{2} \approx 0.0101010_{2} = 0.328125_{10}$

---
layout: center
---

But so is  $\frac{1}{10}$... 

| 2^0  | .    | 2^-1 | 2^-2 | 2^-3 | 2^-4 | 2^-5 | 2^-6 | 2^-7 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 0    | .    | 0    | 0    | 0    | 1    | 1    | 0    | 1*    |

$\frac{1}{10} = 0.0\overline{0011}_{2} \approx 0.0001100_{2} = 0.09375_{10}$

\* rounded

---

$$
\begin{array}{c c c}
    & 0 & . & 1_{10} \\
  + & 0 & . & 2_{10} \\ \hline
    & 0 & . & 3_{10}
\end{array}
$$

$$
\begin{array}{c c c c c c c c c }
    & 0 & . & 0 & 0 & 0 & 1 & 1 & 0 & 1_{2} & \approx 0.1_{10}\\
  + & 0 & . & 0 & 0 & 1 & 1 & 0 & 1 & 0_{2} & \approx 0.2_{10} \\ \hline
    & 0 & . & 0 & 1 & 0 & 0 & 1 & 1 & 1_{10} & = 0.3046875_{10}
\end{array}
$$

---

## Rounding errors in JavaScript

Let's see this in action!

```js {monaco-run}
console.log('🥁');
await new Promise(x => setTimeout(x, 1000));

console.log(0.1 + 0.2);

console.log(0.1, 0.2, 0.3, 0.1 + 0.2);
```

When we say `0.1`, remember a decimal to binary conversion (and rounding!) is happening.

The difference in answers is because we were storing our number as 8-bit (unsigned, fixed-point), but JavaScript is using `Number`, a 64-bit signed floating point number