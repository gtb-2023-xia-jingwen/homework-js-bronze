# 工程结构

此次工程分为三个题目，分别对应如下的目录：

* `src/easy`
* `src/medium`
* `src/another-medium`

每一个题目都要求大家按照需求的描述实现一个（或者几个）函数。请仔细的阅读每一个函数的注释文档，并确保自己能够确切的理解需求。我们提供了一些测试来测试需求中的内容，它也可以帮助大家理解需求并验证自己的程序。如果仍然有不清楚的需求请在考试群中进行提问，但是教练会选择是否回答你的问题（如果需求中已经有明确说明，或者你的问题属于直接询问程序的写法，则教练不会回答）。

请注意，通过所有的测试并不意味着你完全满足了需求，请充分运用自己的逻辑能力确保满足所有需求。测试用例涵盖了最基本的功能但是有可能有遗漏。我们非常欢迎大家照着题目中测试的样子书写你自己的测试（如果你觉得有必要），当然这并非必须。

注意，你只能够修改程序中 `<-start-` 和 `--end-->` 中的内容，其他部分不得修改。已有的测试禁止修改，可以添加新的测试。

# 环境准备

### install dependencies

```bash
npm install
```

### run test

If you want to run all the unit test, you can run:

```bash
npm test
```

If you want to run a single test, you can run:

```bash
npm test -t fileName
```

For example.

```bash
npm test -t union
```
more information about `--testNamePattern=<regex>` : https://jestjs.io/docs/cli#--testnamepatternregex
