// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItem, activeTabId, getActiveTabId} = props
  const {tabId, displayText} = tabItem
  const tabClassName = activeTabId === tabId ? 'tab-item' : null

  const onTabClick = () => {
    getActiveTabId(tabId)
  }

  return (
    <li>
      <button
        className={`tab ${tabClassName}`}
        type="button"
        onClick={onTabClick}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
