import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityDetail from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: Boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void
}


export default function ActivityDashboard({
    activities, 
    selectedActivity, 
    selectActivity, 
    cancelSelectActivity, 
    editMode, 
    openForm, 
    closeForm, 
    createOrEdit,
    deleteActivity }: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList 
                    activities={activities} 
                    selectActivity={selectActivity} 
                    deleteActivity={deleteActivity}
                />
            </Grid.Column>
            <Grid.Column width="6">

                {selectedActivity && !editMode && 
                <ActivityDetail 
                    activity={selectedActivity} 
                    cancelSelectActivity={cancelSelectActivity} 
                    openForm={openForm}
                />}

                {editMode && 
                <ActivityForm 
                    activity={selectedActivity} 
                    closeForm={closeForm}
                    createOrEdit={createOrEdit}
                />}

            </Grid.Column>
        </Grid>
    )
}