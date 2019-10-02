// src/components/InboxScreen.stories.js

import React from 'react'
import InboxScreen from './InboxScreen'

export default { 
  title: 'InboxScreen',
  decorators: [ story => <div style={{ padding: '3rem' }}>{story()}</div> ]
}

export const basic = () => <InboxScreen />
export const error = () => <InboxScreen error="Something" />
