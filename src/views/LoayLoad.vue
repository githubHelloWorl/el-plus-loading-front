<template>
  <el-cascader :props="props" @change="handler"/>
</template>

<script setup>

let id = 0
const props = {
  lazy: true,
  lazyLoad(node, resolve) {
    const { level } = node
    console.log("level = " + level)
    setTimeout(() => {
      const nodes = Array.from({ length: level + 1 }).map((item) => ({
        value: ++id,
        label: `Option - ${id}`,
        leaf: level >= 2,
      }))
      console.log("nodes = ")
      console.log(nodes)
      // Invoke `resolve` callback to return the child nodes data and indicate the loading is finished.
      resolve(nodes)
    }, 1000)
  },
}

const handler = (value) => {
  console.log(value)
}
</script>
