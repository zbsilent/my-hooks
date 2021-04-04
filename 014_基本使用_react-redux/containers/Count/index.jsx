import { connect } from 'react-redux' //引入用于链接UI与redux
import CountUI from '../../components/Count' //引入UI组件
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'

//返回值做为状态传递给UI组件 key - value 返回对象 数据传递给了props
const mapStateToProps = (state) => ({
    count: state
})
//传递操作方法
const mapDispatchToProps = (dispatch) => {
    return {
        increment: data => dispatch(createIncrementAction(data)),
        decrement: data =>  dispatch(createDecrementAction(data)),
        incrementAsync: (data, timer) => {
            dispatch(createIncrementAsyncAction(data, timer));
        }
    }
}
//第一次传递两个参数 必须是函数
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
