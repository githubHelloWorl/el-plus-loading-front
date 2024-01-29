<template>
  <div class="m-4">
    <p>Child options expand when clicked (default)</p>
    <el-cascader :props="props" @change="handleChange" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const url = "/api/test1";

const props = {
  lazy: true,
  lazyLoad(node, resolve) {

    // 构造参数,如果这里使用 { level:node.level+1 } 就会出现
    // org.springframework.web.bind.MissingServletRequestParameterException：方法参数类型 int 所需的请求参数“level”不存在
    const formData = new FormData();
    formData.append("level", node.level + 1);

    // 发送请求
    axios
      .post(url, formData)
      .then((response) => {
        if (response.data.code === 1) {

          // 过滤数据
          // 过滤规则如下
          //   如果 node.level === 0 ,此时node.data 是空的,所以 node.data.id 是 undefined,此时所有数据都可接受
          //   如果 node.level !== 0 ,此时node.data.id指代此时的节点id ,使用el.preId可指代是否是这个节点的子节点
          let nodes = response.data.data.filter(
            (el) =>  ("undefined" === typeof(node.data.id))||(el.preId === node.data.id)
          );

          // 是否是叶子结点
          nodes.map((el) => {
            el["leaf"] = (el.childrenNum === 0);
            return el;
          });

          // 渲染节点
          resolve(nodes);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  },
};

const handleChange = (value) => {
  console.log(value);
};

</script>