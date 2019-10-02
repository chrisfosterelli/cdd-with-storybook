// src/components/TaskList.stories.js

import React from 'react'
import { action } from '@storybook/addon-actions'
import TaskList from './TaskList'

const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0)
}

const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
}

const defaultTasks = [
  { ...task, id: '1', title: 'Task 1' },
  { ...task, id: '2', title: 'Task 2' },
  { ...task, id: '3', title: 'Task 3' },
  { ...task, id: '4', title: 'Task 4' },
  { ...task, id: '5', title: 'Task 5' },
  { ...task, id: '6', title: 'Task 6' }
]

const tasksWithPins = [
  ...defaultTasks.slice(0, 5),
  { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' }
]

export default { title: 'TaskList' }

export const basic = () => <TaskList tasks={defaultTasks} {...actions} />
export const loading = () => <TaskList loading tasks={[]} {...actions} />
export const empty = () => <TaskList tasks={[]} />

export const withPinnedTasks = () => (
  <TaskList tasks={tasksWithPins} {...actions} />
)
