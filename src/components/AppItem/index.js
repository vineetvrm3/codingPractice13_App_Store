// Write your code here

import './index.css'

const AppItem = props => {
  const {app} = props
  const {appName, imageUrl, category} = app

  return (
    <li className="app-item-container">
      <img className="app-image" src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
