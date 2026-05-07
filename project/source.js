export const sourceMarkdown = `
- Markdown Mindmap
  项目汇报思维导图演示
  @image ./project/assets/illustrations/overview.svg
    - 需求分析
      用户目标与演示场景
        - 核心流程
          从根节点开始逐步展开
          @image ./project/assets/illustrations/flow.svg
            - 入口说明
              先展示项目整体目标
            - 交互说明
              键盘与滑条同步切换
            - 视觉要求
              保持轻量演示风格
        - 内容结构
          Markdown 列表驱动节点
            - 文本解析
              支持副标题和主标题
            - 顺序规则
              按前序遍历依次展示
            - 层级关系
              保留父子连接和路径
    - 展示设计
      画布布局与动画策略
      @image ./project/assets/illustrations/layout.svg
        - 路径布局
          当前路径保持横向稳定
            - 主线节点
              选中路径清晰突出
            - 完成分支
              已访问分支保留在上方
            - 未访问内容
              隐藏且不占布局空间
        - 节点弹出与曲线绘制
          @image ./project/assets/illustrations/animation.svg
            - 节点动画
              进入时轻微缩放淡入
            - 曲线动画
              连接线顺滑绘制出现
            - 高亮效果
              当前节点保持橙色光感
`;
