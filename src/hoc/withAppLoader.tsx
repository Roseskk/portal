import React, { useEffect, useState, ComponentType } from "react";
import { useGetProfilesQuery } from "../redux/api/departments";
import Loader from "../components/ui/loader";
import {useGetFacultiesQuery} from "../redux/api/faculty";
import {useGetGroupsQuery} from "../redux/api/group";
import {useGetLessonTypesQuery} from "../redux/api/lessonType";
import {useGetRoomsQuery} from "../redux/api/room";
import {useGetTeachersQuery} from "../redux/api/teachers";
import {useGetDisciplinesQuery} from "../redux/api/discipline";

const withAppLoader = <P extends object>(WrappedComponent: ComponentType<P>): React.FC<P> => {
    return (props: P) => {
        const [isLoading, setLoading] = useState<boolean>(true);

        //Получаем необходимые данные
        const {isSuccess: profileSuccess, isError: profileError} = useGetProfilesQuery('profile');
        const {isSuccess: facultySuccess, isError: facultyError} = useGetFacultiesQuery('faculties')
        const {isSuccess: groupsSuccess, isError: groupsError} = useGetGroupsQuery('groups')
        const {isSuccess: lessonTypesSuccess, isError: lessonTypesError} = useGetLessonTypesQuery('lessonTypes')
        const {isSuccess: roomsSuccess, isError: roomsError} = useGetRoomsQuery('rooms')
        const {isSuccess: teacherSuccess, isError: teacherError} = useGetTeachersQuery('teachers')
        const {isSuccess: disciplinesSuccess, isError: disciplinesError} = useGetDisciplinesQuery('disciplines')

        useEffect(() => {
            if (
                profileSuccess &&
                facultySuccess &&
                groupsSuccess &&
                lessonTypesSuccess &&
                roomsSuccess &&
                teacherSuccess &&
                disciplinesSuccess
            )
            {
                setLoading(false)
            }
        }, [
            profileSuccess,
            facultySuccess,
            groupsSuccess,
            lessonTypesSuccess,
            roomsSuccess,
            teacherSuccess,
            disciplinesSuccess
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
