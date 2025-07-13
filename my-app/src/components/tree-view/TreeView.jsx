import "./TreeView.scss"
import MenuList from './MenuList'

const TreeView = ({menus = []}) => {
  return (
    <div className={"tree-view-wrapper"}>
      <MenuList list={menus} />
    </div>
  )
}

export default TreeView