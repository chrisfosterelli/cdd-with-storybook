// src/components/InboxScreen.js

import React from 'react'
import PropTypes from 'prop-types'
import { action } from '@storybook/addon-actions'
import TaskList from './TaskList'

const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
}

const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0)
}

const defaultTasks = [
  { ...task, id: '1', title: 'Task 1' },
  { ...task, id: '2', title: 'Task 2' },
  { ...task, id: '3', title: 'Task 3' },
  { ...task, id: '4', title: 'Task 4' },
  { ...task, id: '5', title: 'Task 5' },
  { ...task, id: '6', title: 'Task 6' }
]

function InboxScreen({ error }) {
  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    )
  }

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <TaskList tasks={defaultTasks} {...actions} />
    </div>
  )
}

InboxScreen.propTypes = {
  error: PropTypes.string
}

InboxScreen.defaultProps = {
  error: null
}

export default InboxScreen
