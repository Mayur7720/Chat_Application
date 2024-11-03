import React, { useState } from "react";
import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { sampleUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";
import { useInputValidation } from "6pp";
function NewGroup() {
  const groupName = useInputValidation("");
  const [members, setMembers] = useState(sampleUsers);
  const [selectedMember, setSelectedMember] = useState([]);
  const selectMemberHandler = (id) => {
    setSelectedMember((prev) =>
      prev.includes(id) ? prev.filter((addedUser) => addedUser !== id) : [...prev, id]
    );
  };
  console.log(selectedMember);
  const submitHandler = () => {};
  const closeHandler = () => {};
  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={{ xs: "1rem", sm: "3rem" }} spacing={"2rem"} width={"25rem"}>
        <DialogTitle textAlign={"center"} variant="h4">
          New Group
        </DialogTitle>
        <TextField
          value={groupName.value}
          onChange={groupName.changeHandler}
          label="Group Name"
        />
        <Typography variant="body1">Members</Typography>
        <Stack>
          {members.map((user) => (
            <UserItem
              user={user}
              key={user._id}
              handler={selectMemberHandler}
              isAdded={selectedMember.includes(user._id)}
            />
          ))}
        </Stack>
        <Stack justifyContent={"space-evenly"} direction={"row"}>
          <Button variant="text" color="error" size="large">
            Cancel
          </Button>
          <Button onClick={submitHandler} variant="contained" size="large">
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
}

export default NewGroup;
