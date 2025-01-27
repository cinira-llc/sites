import {PropsWithChildren} from "react";
import {Button} from "@/components/ui/button";

export default function PasswordEncryptForm({children}: PropsWithChildren) {
    console.log(typeof children);
    return (
        <Button>Encrypt</Button>
    );
}
