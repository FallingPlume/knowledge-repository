## Spring Bean的生命周期

1. 解析类得到BeanDefinition
2. 如果有多个构造方法，则要推断构造方法
3. 确定好构造方法后，进行实例化得到一个对象
4. 对对象中加了@Autowired注解的属性进行属性注入
5. 回调Aware方法，比如BeanNameAware，BeanFactoryAware
6. 调用BeanPostProcessor的初始化前的方法
7. 调用初始化方法
8. 调用BeanPostProcessor的初始化后的方法，在这里会进行AOP
9. 如果当前创建的Bean是单例的，则会把Bean放入单例池
10. 使用Bean
11. Spring容器关闭时调用DisposableBean中destory()方法

## Spring支持的Bean作用域

## 如何实现接口幂等性