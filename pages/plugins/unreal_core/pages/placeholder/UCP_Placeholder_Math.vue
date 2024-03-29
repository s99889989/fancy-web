<script setup lang="js">
import {useUnrealCorePluginLanguage} from "~/stores/plugins/unreal_core/useUnrealCorePluginLanguage";
import {useLanguageControl} from "~/stores/useLanguageControl";
const unrealCorePluginLanguage = useUnrealCorePluginLanguage();
const languageControl = useLanguageControl()

const language_computed = computed(()=>{
  let language = {
    title: 'Math expression',
    attribute:{
      sin: {
        attribute: 'sin(x)',
        description: ['Sine of an angle expressed in radians'],
      },
      cos: {
        attribute: 'cos(x)',
        description: ['Cosine of an angle expressed in radians'],
      },
      tan: {
        attribute: 'tan(x)',
        description: ['Tangent of an angle expressed in radians'],
      },
      asin: {
        attribute: 'asin(x)',
        description: ['Arc sine in the range [-π/2, π/2)'],
      },
      acos: {
        attribute: 'acos(x)',
        description: ['Arc cosine in the range [0, π)'],
      },
      atan: {
        attribute: 'atan(x)',
        description: ['Arc tangent in the range [-π/2, π/2)'],
      },
      sinh: {
        attribute: 'sinh(x)',
        description: ['Hyperbolic sine (e^x - e^(-x)) / 2'],
      },
      cosh: {
        attribute: 'cosh(x)',
        description: ['Hyperbolic cosine (e^x + e^(-x)) / 2'],
      },
      tanh: {
        attribute: 'tanh(x)',
        description: ['Hyperbolic tangent (e^x - e^(-x)) / (e^x + e^(-x))'],
      },
      log: {
        attribute: 'log(x)',
        description: ['Base 10 logarithm of x'],
      },
      log1p: {
        attribute: 'log1p(x)',
        description: ['Base 10 logarithm of (x + 1)'],
      },
      log10: {
        attribute: 'log10(x)',
        description: ['Base 10 logarithm of x'],
      },
      log2: {
        attribute: 'log2(x)',
        description: ['Base 2 logarithm of x'],
      },
      pow: {
        attribute: 'pow(b, e)',
        description: ['b to the power of e'],
      },
      sqrt: {
        attribute: 'sqrt(x)',
        description: ['Square root of x'],
      },
      cbrt: {
        attribute: 'cbrt(x)',
        description: ['Cube root of x'],
      },
      exp: {
        attribute: 'exp(x)',
        description: ['e to the power of x'],
      },
      expm1: {
        attribute: 'expm1(x)',
        description: ['e to the power of x minus 1 (e^x - 1)'],
      },
      signum: {
        attribute: 'signum(x)',
        description: ['Signum of x (-1, 0, 1 for < 0, = 0 and > 0 respectively)'],
      },
      abs: {
        attribute: 'abs(x)',
        description: ['Absolute value of x'],
      },
      ceil: {
        attribute: 'ceil(x)',
        description: ['First integer closest to negative infinity greater than or equal x'],
      },
      floor: {
        attribute: 'floor(x)',
        description: ['First integer closest to positive infinity less than or equal x'],
      },
      pi: {
        attribute: 'pi()',
        description: ['Ratio of the circumference of a circle to its diameter 3.14159265358979323846'],
      },
      e: {
        attribute: 'e()',
        description: ['Base of the natural logarithm 2.7182818284590452354'],
      },
      radians: {
        attribute: 'radians(x)',
        description: ['Convert angle values to radians.'],
      },
      clamp: {
        attribute: 'radians(x, min, max)',
        description: ['If x is less than min, it is equal to min, and if it is greater than max, it is equal to max.'],
      },
      min: {
        attribute: 'radians(x, y)',
        description: ['Compare the x and y values and take the larger value.'],
      },
      max: {
        attribute: 'radians(x, y)',
        description: ['Compare the x and y values and take the larger value.'],
      },
    }

  }
  if(languageControl.data.language === 'chinese_traditional'){
    language = {
      title: '數學 表達式',
      attribute:{
        sin: {
          attribute: 'sin(x)',
          description: ['以弧度表示的角度的正弦'],
        },
        cos: {
          attribute: 'cos(x)',
          description: ['Cosine of an angle expressed in radians'],
        },
        tan: {
          attribute: 'tan(x)',
          description: ['以弧度表示的角度的餘弦'],
        },
        asin: {
          attribute: 'asin(x)',
          description: ['[-π/2, π/2) 範圍內的反正弦'],
        },
        acos: {
          attribute: 'acos(x)',
          description: ['[0, π) 範圍內的反餘弦'],
        },
        atan: {
          attribute: 'atan(x)',
          description: ['[-π/2, π/2) 範圍內的反正切'],
        },
        sinh: {
          attribute: 'sinh(x)',
          description: ['雙曲正弦 (e^x - e^(-x)) / 2'],
        },
        cosh: {
          attribute: 'cosh(x)',
          description: ['雙曲餘弦 (e^x + e^(-x)) / 2'],
        },
        tanh: {
          attribute: 'tanh(x)',
          description: ['雙曲正切 (e^x - e^(-x)) / (e^x + e^(-x))'],
        },
        log: {
          attribute: 'log(x)',
          description: ['x 以 10 為底的對數'],
        },
        log1p: {
          attribute: 'log1p(x)',
          description: ['(x + 1) 以 10 為底的對數'],
        },
        log10: {
          attribute: 'log10(x)',
          description: ['x 以 10 為底的對數'],
        },
        log2: {
          attribute: 'log2(x)',
          description: ['x 以 2 為底的對數'],
        },
        pow: {
          attribute: 'pow(b, e)',
          description: ['b 的 e 次方'],
        },
        sqrt: {
          attribute: 'sqrt(x)',
          description: ['x 的平方根'],
        },
        cbrt: {
          attribute: 'cbrt(x)',
          description: ['x 的立方根'],
        },
        exp: {
          attribute: 'exp(x)',
          description: ['e 的 x 次方'],
        },
        expm1: {
          attribute: 'expm1(x)',
          description: ['e 的 x 次方減量 1 (e^x - 1)'],
        },
        signum: {
          attribute: 'signum(x)',
          description: ['x 的符號（-1、0、1 分別表示 < 0、= 0 和 > 0）'],
        },
        abs: {
          attribute: 'abs(x)',
          description: ['x 的絕對值'],
        },
        ceil: {
          attribute: 'ceil(x)',
          description: ['第一個最接近負無窮大且大於或等於 x 的整數'],
        },
        floor: {
          attribute: 'floor(x)',
          description: ['第一個最接近正無窮大且小於或等於 x 的整數'],
        },
        pi: {
          attribute: 'pi()',
          description: ['圓的周長與其直徑之比 3.14159265358979323846'],
        },
        e: {
          attribute: 'e()',
          description: ['自然對數的底 2.7182818284590452354'],
        },
        radians: {
          attribute: 'radians(x)',
          description: ['將角度值轉換為弧度。'],
        },
        clamp: {
          attribute: 'radians(x, min, max)',
          description: ['x如果小於min就等於min，如果大於max就等於max。'],
        },
        min: {
          attribute: 'radians(x, y)',
          description: ['x和y值比較取較小值。'],
        },
        max: {
          attribute: 'radians(x, y)',
          description: ['x和y值比較取較大值。'],
        },
      }
    }
  }
  if(languageControl.data.language === 'chinese_simplified'){
    language = {
      title: '数学 表达式',
      attribute:{
        sin: {
          attribute: 'sin(x)',
          description: ['以弧度表示的角度的正弦'],
        },
        cos: {
          attribute: 'cos(x)',
          description: ['以弧度表示的角度的余弦'],
        },
        tan: {
          attribute: 'tan(x)',
          description: ['以弧度表示的角度的正切'],
        },
        asin: {
          attribute: 'asin(x)',
          description: ['[-π/2, π/2) 范围内的反正弦'],
        },
        acos: {
          attribute: 'acos(x)',
          description: ['[0, π) 范围内的反余弦'],
        },
        atan: {
          attribute: 'atan(x)',
          description: ['[-π/2, π/2) 范围内的反正切'],
        },
        sinh: {
          attribute: 'sinh(x)',
          description: ['双曲正弦 (e^x - e^(-x)) / 2'],
        },
        cosh: {
          attribute: 'cosh(x)',
          description: ['双曲余弦 (e^x + e^(-x)) / 2'],
        },
        tanh: {
          attribute: 'tanh(x)',
          description: ['双曲正切 (e^x - e^(-x)) / (e^x + e^(-x))'],
        },
        log: {
          attribute: 'log(x)',
          description: ['x 以 10 为底的对数'],
        },
        log1p: {
          attribute: 'log1p(x)',
          description: ['(x + 1) 以 10 为底的对数'],
        },
        log10: {
          attribute: 'log10(x)',
          description: ['x 以 10 为底的对数'],
        },
        log2: {
          attribute: 'log2(x)',
          description: ['x 以 2 为底的对数'],
        },
        pow: {
          attribute: 'pow(b, e)',
          description: ['b 的 e 次方'],
        },
        sqrt: {
          attribute: 'sqrt(x)',
          description: ['x 的平方根'],
        },
        cbrt: {
          attribute: 'cbrt(x)',
          description: ['x 的立方根'],
        },
        exp: {
          attribute: 'exp(x)',
          description: ['e 的 x 次方'],
        },
        expm1: {
          attribute: 'expm1(x)',
          description: ['e 的 x 次方减 1 (e^x - 1)'],
        },
        signum: {
          attribute: 'signum(x)',
          description: ['x 的符号（-1、0、1 分别表示 < 0、= 0 和 > 0）'],
        },
        abs: {
          attribute: 'abs(x)',
          description: ['x 的绝对值'],
        },
        ceil: {
          attribute: 'ceil(x)',
          description: ['第一个最接近负无穷大且大于或等于 x 的整数'],
        },
        floor: {
          attribute: 'floor(x)',
          description: ['第一个最接近正无穷大且小于或等于 x 的整数'],
        },
        pi: {
          attribute: 'pi()',
          description: ['圆的周长与其直径之比 3.14159265358979323846'],
        },
        e: {
          attribute: 'e()',
          description: ['自然对数的底 2.7182818284590452354'],
        },
        radians: {
          attribute: 'radians(x)',
          description: ['将角度值转换为弧度。'],
        },
        clamp: {
          attribute: 'radians(x, min, max)',
          description: ['x如果小于min就等于min，如果大于max就等于max。'],
        },
        min: {
          attribute: 'radians(x, y)',
          description: ['x和y值比较取较小值。'],
        },
        max: {
          attribute: 'radians(x, y)',
          description: ['x和y值比较取较大值。'],
        },
      }
    }
  }
  return language;
})

</script>

<template>
  <p class="text-4xl dark:text-white">{{language_computed.title}}</p>

  <p class="text-3xl text-red-500 mt-5">{{ languageControl.data.attributes.head}}</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">

      <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

      <tr>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">{{ languageControl.data.attributes.attribute}}</p>
        </th>
        <th scope="col" class="px-6 py-3">
          <p class="text-base dark:text-white">{{ languageControl.data.attributes.description}}</p>
        </th>
      </tr>

      </thead>

      <tbody>

      <tr v-for="(module) in language_computed.attribute" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <p class="text-base dark:text-white">{{module.attribute}}</p>
        </th>
        <td class="px-6 py-4">
          <p v-for="(descr) in module.description" class="text-base dark:text-white">{{descr}}</p>
        </td>
      </tr>

      </tbody>

    </table>
  </div>

  <p class="text-3xl text-red-500 mt-5">{{ languageControl.data.attributes.example}}</p>
  <pre class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   <code class="dark:text-white">
     {player_self_z}+cos(radians(({player_self_yaw}+240)*-1))*3
</code>
  </pre>

</template>

<style scoped>

</style>