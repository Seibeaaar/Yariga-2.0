import { FC } from 'react';
import { Avatar } from '@mui/material';
import { PropertyOwner } from '@/types/property';
import { getFullName, getInitials } from '@/utils/profile';
import { ROLE_NAME_BY_TYPE } from '@/constants/profile';
import { USER_ROLE } from '@/types/profile';
import { formatPluralNoun } from '@/utils/common';

type PropertyOwnerInfoProps = {
    owner: PropertyOwner;
}

const PropertyOwnerInfo: FC<PropertyOwnerInfoProps> = ({ owner }) => {
    return (
        <article className="rounded-[10px] border border-border-light dark:border-border-dark px-[25px] pt-[15px] pb-[20px]">
            <div className='flex flex-col items-center text-primary-light dark:text-primary-dark'>
                <Avatar src={owner.profilePicture} sx={{
                    width: 90,
                    height: 90
                }}>{getInitials(owner)}</Avatar>
                <h5 className='text-lg font-semibold mt-[24px] mb-[8px]'>{getFullName(owner)}</h5>
                <p className='text-sm text-secondary-light dark:text-secondary-dark mb-[8px]'>{ROLE_NAME_BY_TYPE[USER_ROLE.Landlord]}</p>
                <p className='font-semibold'
                >
                    {owner.properties.length}
                    {' '}
                    {formatPluralNoun(
                        owner.properties.length,
                        'property',
                        'properties'
                    )}
                </p>
            </div>
        </article>
    )
};

export default PropertyOwnerInfo;