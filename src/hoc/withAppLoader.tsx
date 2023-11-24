import React, { useEffect, useState, ComponentType } from "react";
import { useGetProfilesQuery } from "../redux/api/departments";
import Loader from "../components/ui/loader";
import {useGetFacultiesQuery} from "../redux/api/faculty";
import {useGetGroupsQuery} from "../redux/api/group";
import {useGetLessonTypesQuery} from "../redux/api/lessonType";
import {useGetRoomsQuery} from "../redux/api/room";

const withAppLoader = <P extends object>(WrappedComponent: ComponentType<P>): React.FC<P> => {
    return (props: P) => {
        const [isLoading, setLoading] = useState<boolean>(true);
        const {isSuccess: profileSuccess, isError: profileError} = useGetProfilesQuery('profile');
        const {isSuccess: facultySuccess, isError: facultyError} = useGetFacultiesQuery('faculties')
        const {isSuccess: groupsSuccess, isError: groupsError} = useGetGroupsQuery('groups')
        const {isSuccess: lessonTypesSuccess, isError: lessonTypesError} = useGetLessonTypesQuery('lessonTypes')
        const {isSuccess: roomsSuccess, isError: roomsError} = useGetRoomsQuery('rooms')

        useEffect(() => {
            if (
                profileSuccess &&
                facultySuccess &&
                groupsSuccess &&
                lessonTypesSuccess &&
                roomsSuccess
            )
            {
                setLoading(false)
            }
        }, [
            profileSuccess,
            facultySuccess,
            groupsSuccess,
            lessonTypesSuccess,
            roomsSuccess
        ]);

        return (
            <>
                {isLoading ? (
                    <Loader />
                ) : (
                    <>
                        <WrappedComponent {...(props as P)} />
                    </>
                )}
            </>
        );
    };
}

export default withAppLoader;
