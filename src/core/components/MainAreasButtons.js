import {Column} from "../layout/Column";
import {Row} from "../layout/Row";
import Button from "./Button";
import React from "react";


const MainAreasButtons = props => {
    return (
        <Column marginTop={20}>
            <Row marginBottom={25} spaceBetween>
                <Button active>
                    Blood Glucose
                </Button>

                <Button>
                    Medication
                </Button>
            </Row>
            <Row marginBottom={25} spaceBetween>
                <Button >
                    Food Tracking
                </Button>

                <Button>
                    Exercise
                </Button>
            </Row>
            <Row marginBottom={25} spaceBetween>
                <Button >
                    Weight Management
                </Button>

                <Button>
                   Blood Pressure
                </Button>
            </Row>

            <Row marginBottom={25} spaceBetween>
                <Button >
                    A1C
                </Button>
            </Row>
        </Column>
    );
};
export default MainAreasButtons;

