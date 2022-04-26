// Simple implementation of https://github.com/sanity-io/sanity/blob/21af6baffe88d57db32d0a05e048ef7d3d671523/packages/%40sanity/form-builder/src/inputs/ArrayInput/ArrayFunctions.tsx

import React from "react";
import DropDownButton from "part:@sanity/components/buttons/dropdown";
import Button from "part:@sanity/components/buttons/default";
import ButtonGrid from "part:@sanity/components/buttons/button-grid";

export default class ArrayFunctions extends React.Component {
	handleDropDownAction = (menuItem) => {
		this.handleInsertItem(menuItem.type);
	};
	handleAddBtnClick = () => {
		this.handleInsertItem(this.props.type.of[0]);
	};
	handleInsertItem = (type) => {
		const { onCreateValue, onAppendItem } = this.props;
		const item = onCreateValue(type);
		onAppendItem(item);
	};
	renderSelectType(isList) {
		const items = this.props.type.of.map((memberDef) => ({
			title: memberDef.title || memberDef.type.name,
			type: memberDef,
		}));
		return (
			<DropDownButton
				inverted
				items={items}
				onAction={this.handleDropDownAction}
			>
				{isList ? "Add" : "Choose"}
			</DropDownButton>
		);
	}
	render() {
		const { type, readOnly, children, value } = this.props;

		const maxLength =
			type.type.validation[0]._rules.find(
				(rule) => rule.flag === "max"
			) || false;

		const isList = maxLength && maxLength.constraint === 1 ? false : true;

		if (maxLength && value && value.length >= maxLength.constraint) {
			return null;
		}

		if (readOnly) {
			return null;
		}
		return (
			<div>
				<ButtonGrid align="start">
					{type.of.length === 1 ? (
						<Button inverted onClick={this.handleAddBtnClick}>
							Add
						</Button>
					) : (
						this.renderSelectType(isList)
					)}

					{children || null}
				</ButtonGrid>
			</div>
		);
	}
}
