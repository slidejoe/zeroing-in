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

<!--
This is how I learned about numbers in school.

- Hundreds
- Tens
- Units

But this can also be written as...
-->


---
layout: center
class: text-center
---


| 100  | 10   | 1    |
| ---- | ---- | ---- |
| 6    | 6    | 6    |

<!--
- Hundreds
- Tens
- Ones (units)
-->

---
layout: center
class: text-center
---


| 100  | 10   | 1    |
| ---- | ---- | ---- |
| 6    | 6    | 6    |
| 600  | 60   | 6    |

<!--
To "work out" what this number means, we multiply the value in the column by its header

- 6 &times; 100 = 600
- PLUS
- 6 &times; 10 = 60
- PLUS
- 6 &times; 1 = 6

Which gives us this value of 666 as we know it.

But why 100, 10, 1?
-->

---
layout: center
class: text-center
---
| 10^2 *= 100* | 10^1 *= 10* | 10^0 *= 1* |
| --------------------------------- | -------------------------------- | ------------------------------- |
| 6                                 | 6                                | 6                               |

<!--
 - They're the powers of 10
 - 10<sup>2</sup> = 100
 - 10<sup>1</sup> = itself, 10
 - 10<sup>0</sup>, anything to the power 0 is 1
 - 10 is important in our counting system.
-->

---
layout: center
class: text-center
---

## “Base 10”

**10**^1<br />⬆️

<!--
- Our counting system is called "base 10"
- thats because the base number that we use for our powers is 10

So, some **bassists** you might've come across...
-->

---
layout: default
---

## Some bassists you might've come across

![Left: Lee playing the bass guitar in his band The Dysfunctions, Right: Richard playing the electric double bass](/media/bassists.jpg)

<!--
Sorry, some **bases** you might've come across...
-->

---
layout:
---

## Some [bases]{v-mark.underline.orange=0} you might've come across

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

<!--
Sorry, some **bases** you might've come across...

- Decimal
  - Dec as in 10
  - base 10
  - We have 10 fingers, its why our "normal" number system is 10
- Duodecimal or dozenal
  - as in a _dozen_ eggs
  - base 12
- hexadecimal
  - hex as in six, dec as in 10
  - base 16
  - CSS colours
- binary
  - bi as in the two wheels on a bicyle
  - base 2
  - the one computers use
-->

---
---
## Why do computers use binary?

Base 10 has 10 digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

Base 2 has 2 digits: 0, 1

Hey look, that's a bit!

On or off

<!--
Why do computers use binary?

- Base 10 has 10 digits
  - 0-9
- Base 2 has 2 digits
  - 0 and 1
- You might recognise those two values as on or off
  - Or a _bit_
-->

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

<!--
Take an example of `101010` - what is this in decimal?

- take the value in the first column (1)
- multiply by the header value (32)
- to give us 32
- add all the other column values together
- 32 + 0 + 8 + 2 + 0

What does that equal?
-->

---

32 + 8 + 2 =

🥁

<SlidevVideo v-click autoplay>
  <source src="/media/42.mp4" type="video/mp4" />
</SlidevVideo>

<!--
src: ./pages/hex-sidequest.md
-->

---

## That's `int`!
This is how C# `short` (15 + 1 bits), `int` (31 + 1 bits), `long` (63 + 1 bits) work!

<v-click>

### What's the +1 for?

One bit is used to represent a minus sign. This is called _two's complement_.

[0]{v-mark.orange.circle} 0000000 00101010 = 42_10

[1]{v-mark.orange.circle} 0000000 00101010 = -42_10

</v-click>

<!--
That's how integers are stored.

In C# we have:
  - `short` 15 bit numbers
  - `int` - 31 bits
  - `long` - 63 bits

[Click]
What's the "+1"?

- Stored with one bit used to represet the sign
- two's complement
- [Click] 0 = positive
- [Click] 1 = negative

-->
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

<v-click>&pi; &approx; 3.141_10</v-click>

<v-click>

## Counting fractional numbers in binary

| 2^2 *= 4* | 2^1 *= 2* | 2^0 *= 1* | .    | 2^-1 *= 1/2* | 2^-2 *=  1/4* | 2^-3*= 1/8* |
| ------------ | ----------- | ---------- | ---- | -------------- | --------------- | ---------------- |
| 0          | 1         | 1          | .    | 0             | 0               | 1                |

</v-click>

<v-click>&pi; &approx; 3.125_10</v-click>

<!--
First lets analyse how "decimal numbers" work in base 10

(I'm saying fractional numbers here to avoid confusion!)

In base 10
- decimal point 
- tenths, hundredths and thousandths columns

But we're using those powers as headings, so where do we go below 10<sup>0</sup>?

[Click] Negative! 10<sup>-1</sup> [Click] 10<sup>-2</sup> [Click] 10<sup>-3</sup>

[Click] That's a decimal approximation of Pi, by the way

[Click] Counting fractions in binary works in the same way

- Continue headers beyond the decimal points with negative powers
- [Click] This is a binary representation of Pi
-->

---
layout: center
---

## Recursion in decimal

In base 10, $\frac{1}{3}$ is a bit of a problem...

| 10^0 | .    | 10^-1 | **10^-2** | 10^-3 | 10^-4 | 10^-5 | 10^-6 | 10^-7 |
| ------------ | ----------- | ---------- | ---- | -------------- | --------------- | ---------------- | ---------------- | ---------------- |
| 0          | .          | 3          | 3    | 3             | 3              | 3                             | 3                            | 3                            |


$\frac{1}{3} = 0.\overline{3}_{10} \approx 0.3333333_{10}$

<!--
As we know some fractions aren't exactly representable in decimal

- Take a third, for example
- Can take as many 10<sup>-n</sup> as you like, we'll never get to 1/3
-->

---
layout: center
---

## Recursion in binary
In base 2, $\frac{1}{3}$ is **still** problem... 

| 2^0 | .    | 2^-1 | 2^-2 | 2^-3 | 2^-4 | 2^-5 | 2^-6 | 2^-7 |
| ------------ | ----------- | ---------- | ---- | -------------- | --------------- | ---------------- | ---------------- | ---------------- |
| 0          | .          | 0          | 1    | 0             | 1             | 0                             | 1                            | 0                            |

$\frac{1}{3} = 0.\overline{10}_{2} \approx 0.0101010_{2} = 0.328125_{10}$

<!--
1/3 is also not representable in binary

Any number that recurs in base 10 will recur in binary
-->
---
layout: center
---

But so is  $\frac{1}{10}$... 

| 2^0  | .    | 2^-1 | 2^-2 | 2^-3 | 2^-4 | 2^-5 | 2^-6 | 2^-7 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 0    | .    | 0    | 0    | 0    | 1    | 1    | 0    | 1*    |

$\frac{1}{10} = 0.0\overline{0011}_{2} \approx 0.0001100_{2} = 0.09375_{10}$

\* rounded

<!--
But in binary, 1/10 is also a recurring number
-->

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

<!-- 
And just like multiplying 0.3 recurring by 3 doesn't quite equal 1 in decimal

In binary if we add 0.1 and 0.2 we get 0.304... etc
-->

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

<!--
- We can see this in JS
- running live
- remember: when we assign a decimal number in code -> translated to binary


- BTW, the reason this is different result
- we calculated an 8-bit number
- JS is using a 64-bit number 
-->

---
layout: center
---

## How do you write a decimal point when you've only got 1s and 0s?!

<v-clicks>

- We've been writing fractional numbers using a `.`
- Computers store data as `0` or `1`
- `.` is not a `0` or a `1`

</v-clicks>

<!--
How do you write a decimal point!?

- We've been writing fractional numbers using a `.`
- Computers store data as `0` or `1`
- `.` is not a `0` or a `1`
-->

---
layout: center
---

## Fixed point notation

Lets use 4 bytes and imagine the decimal point sits between them

[00000000 00000000]{v-mark.box.orange=1} [00000000 00000000]{v-mark.box.orange=2}

<v-clicks>

- Largest whole number: 11111111 11111111_2 = 65535_10
- Smallest precision: 0.00000000 00000001_2 &approx; 0.00002_10
- That's a lot of bits to contain a number as small as 65535_10...

</v-clicks>

<!--
- One option is fixed point notation
- Using 4 bytes
- We set a convention
  - 2 bytes before, 2 after
- Max 65,000
- Precision of 0.000 02
- Uses a lot of bits to convey a small number
-->
---

## Exponents, an introduction

$$c \approx 299,800,000 ms^{-1}$$
Woah, thats a big number. And its really hard to grasp the size of it at a glance.

<v-click>
So you might see this written as an exponent:

$$c \approx 2.998 \times 10^{8} ms^{-1}$$

The number is now a number between 1 and 10 (10^0 and 10^1) with an exponent to multiply it to the true value
</v-click>
<v-click>
You might also see:

$c \approx 2.998 \exp(8)ms^{-1}$
or
$c \approx 2.998e+8ms^{-1}$

Particularly on calculators.
</v-click>

<!--
- might've seen exponents before
- with decimal numbers
- speed of light
- big number, hard to grasp its magnitude
- [Click] Use "scientific notation"
- It's now between 1 and 10 (10^0 and 10^1)
- an exponent to multiply it to the true value
- magnitude is obvious (10<sup>8</sup>ms<sup>-1</sup>)
- [Click] Calculators like to show this in a different form, but it's all the same
-->

---

## Exponents in binary
<v-clicks>

1. Convert to binary

  &pi; &approx; 11.001001000011111101101..._2

2. Use an exponent to make the _mantissa_ a number between 2^0 (1) and 2^1 (2)

  1.1001001000011111101101...&times;2^1_2

3. Discard the `1.` (it's always a 1)

  [1.]{v-mark.strike.orange}1001001000011111101101...&times;2^1_2

4. Add 127 to the exponent (this number is offset to allow for positive and negative exponents)

  1_2 + 01111111_2 = 10000000

4. Fill in the bits in a predefined pattern

  0 [10000000]{v-mark.box.orange=10} [1001001 00001111 1101101]{v-mark.circle.orange=11}

</v-clicks>

<!--
Exponents work in binary in a very similar way.

This is the process to store a number as a binary exponent format

- [Click] Convert the number to binary
  - using pi again
- [Click] 

-->

---
layout: center
---
## Floating point notation

0 [10000000]{v-mark.box.orange} [1001001 00001111 1101101]{v-mark.circle.orange}

<v-clicks>

- Largest whole number: `0 11111110* 1111111 11111111 11111111`  = 1.99...&times;2^127_10 &approx; 3.40&times;10^38_10
- Smallest precision: Up to `0 00000001  0000000 00000000 00000001` &approx; 1.17&times;10^-38_10
- But the precision varies; .NET only claims precision to ~6-9 digits

</v-clicks>

<small>* 11111111 is used to help represent infinity</small>

---

<v-clicks depth="2">

* This 4-byte floating point number is a `float` in .NET!
* 3 guesses as to how many bytes are used in a _double_...
  * 8-byte floating point is a .NET `double`
* 3 more guessed how big a _Half_ is...
  * 2-byte floating point is a .NET `Half`
* A JS `Number` is also an 8-byte float point
    * So when decoding JSON, all numbers should* be decoded as a `double`

      \* it shouldn't

</v-clicks>

---
layout: center
---

> "This all sounds kinda dodgy, sometimes exact precision is a requirement!"

\- You, just now in your head

---

## .NET's `decimal`

A way of representing base 10/decimal numbers accurately in binary.

- Decimal integers are always exactly representable as binary integers
- `decimal`s store an integer value and a (negative) base 10 exponent
- e.g. [31415926535897932384626433833]{v-mark.box.orange=2}&times;[10]{v-mark.underline.orange=1}<sup>- [28]{v-mark.circle.orange=3}</sup><sub>10</sub> []{v-click}
- 0 [11001011...00101001]{v-mark.box.orange=2} [11100]{v-mark.circle.orange=3} []{v-click}[]{v-click}

<v-clicks>

- Loads of bytes
  - 16 bytes (twice the size of a double), only uses 102 bits
- 28-29 digits of precision
- Use when precision matters, e.g. money
- Speaking of money, `decimal`s come at a cost (a performance one)
- Bad luck if you're using JavaScript

</v-clicks>

---
layout: center
---

## Specifying specificity

```cs
var myInt = 3;
var myFloat = 3.14f;
var myDouble = 3.14; // the default
var myExplicitDouble = 3.14d; // or be explicit
var myHalf = (Half)3.14; // .NET 5+
var myDecimal = 3.14m; //m for money
```

---
layout: center
---

> "What about numbers _below_ zero!?"

\- You, just now in your head

---
layout: center
---

## The sign bit

[0]{v-mark.circle.orange} 10000000 1001001 00001111 1101101

0 is positive, 1 is negative

---
layout: center
---

## Don't need negative numbers or fractions?

Try unsigned-integers to store numbers over twice as large ($n\times2+1$) as their signed counterparts!
```cs
ushort unsignedShort = 65535;
uint unsignedInt = 4294967295;
ulong unsignedLong = 18446744073709551615;
```


---

# Thank you

_<small>(My head hurts)</small>_

## Questions?

🐘 [@joe@umbraco&#8239;community.social](https://umbracocommunity.social/joe)

🦋 [@joe.gl](https://bsky.app/profile/joe.gl)


## Further Reading
- https://csharpindepth.com/Articles/Decimal
- https://csharpindepth.com/Articles/FloatingPoint
- https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/floating-point-numeric-types
- https://en.wikipedia.org/wiki/Single-precision_floating-point_format

_<small>Special thanks to [Calculator.net's Binary Calculator](https://www.calculator.net/binary-calculator.html), [RapidTables' Binary converter](https://www.rapidtables.com/convert/number/binary-to-decimal.html) and [WolframAlpha](https://www.wolframalpha.com) for saving what remains of my sanity.</small>_