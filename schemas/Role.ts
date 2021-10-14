import { list } from "@keystone-next/keystone/schema";
import { relationship, text } from "@keystone-next/fields";
import { permissionFields } from './fields';
import { permissions } from '../seed-data/access';

export const Role = list({
  access:{
    create:permissions.canManageRoles,
    read:permissions.canManageRoles,
    update:permissions.canManageRoles,
    delete:permissions.canManageRoles,
  },
  ui:{
    hideCreate:args => !permissions.canManageRoles(args),
    hideDelete:args => !permissions.canManageRoles(args),
    isHidden:args => !permissions.canManageRoles(args),
  },
  fields: {
    name: text({ isRequired: true }),
    ...permissionFields,
    assignedTo: relationship({
      ref: "User.role",
      many: true,
      ui: {
        itemView: { fieldMode: "read" },
      },
    }),
  },
});