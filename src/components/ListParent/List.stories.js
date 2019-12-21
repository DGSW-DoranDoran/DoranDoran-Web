import React from 'react';
import List from './List/List';
import ListCard from './ListCard/ListCard';

const teams = [
  {
    category: "2020 해커톤",
    name: "해커톤 같이 나가실 분",
    type: 1,
    status: 0,
    member_count: 2,
    deadline_member: 5,
    create_time: "2019-12-20 12:17:30",
    deadline_time: " 2020-01-22 23:59:59"
  },
  {
    category: "밥",
    name: "밥 같이 먹을 팀원 구함",
    type: 0,
    status: 1,
    member_count: 4,
    deadline_member: 4,
    create_time: "2019-12-20 12:17:30",
    deadline_time: " 2019-12-31 23:59:59"
  }
]

const team = {
  category: "2019 해커톤",
  name: "해커톤",
  type: 0,
  status: 1,
  member_count: 5,
  deadline_member: 5,
  create_time: "2019-12-20 12:17:30",
  deadline_time: " 2019-12-31 23:59:59"
}
export default {
  title: 'Components|List',
}

export const All = () => {
  return <List teams={teams} />
}

export const Card = () => {
  return <ListCard team={team} />
}