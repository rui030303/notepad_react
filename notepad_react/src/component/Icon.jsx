const Icon = ({name}) => {
    return (
      <img
        src={`https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/reactbase/ka/${name}.svg`}
        alt="icon"
        style={{
          width: 20,
          height: 20,
        }}
        />
    )
  }
  
  export default Icon