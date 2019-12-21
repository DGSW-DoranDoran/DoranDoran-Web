import React from 'react';
import GroupContainer from '../containers/Group/GroupContainer';
import PageTemplate from "components/common/PageTemplate";

const GroupPage = ({match}) =>{
  return (
    <PageTemplate>
    <GroupContainer groupId={match.params.groupid} />
    </PageTemplate>
  );
};

export default GroupPage;