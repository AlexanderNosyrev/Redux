import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (data, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return data
    case VisibilityFilters.SHOW_COMPLETED:
      return data.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return data.filter(t => !t.completed)
    case VisibilityFilters.HIDE_ALL:
      return data.filter(t => !data)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  data: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
