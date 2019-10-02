// src/components/Task.stories.js

import React from 'react'
import { action } from '@storybook/addon-actions'
import Task from './Task'

const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
}

const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
}

export default { title: 'Task' }

export const basic = () => <Task task={task} {...actions} />

export const pinned = () => (
  <Task 
    task={{ ...task, state: 'TASK_PINNED' }}
    {...actions} />
)

export const archived = () => (
  <Task 
    task={{ ...task, state: 'TASK_ARCHIVED' }}
    {...actions} />
)
