---
layout: intro
class: inverte
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

[1 0 1 0]{v-mark.box.orange=1} [ 1 0 1 0]{v-mark.box.orange=2}<sub>2</sub>

&nbsp;&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A_16

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
