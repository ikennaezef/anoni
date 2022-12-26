import React, { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import { MessageType } from "../types";
import Message from "./Message";

type Props = {
	messages: MessageType[];
};

const MessagesWrapper = ({ messages }: Props) => {
	const [loading, setLoading] = useState<boolean>(true);
	const [pageNumber, setPageNumber] = useState<number>(1);

	const messageLength = messages.length;
	const messagesPerPage = 10;
	const pageCount = Math.ceil(messageLength / messagesPerPage);

	const changePage = ({ selected }: any) => {
		setPageNumber(selected + 1);
		window.scroll(0, 100);
	};

	useEffect(() => {
		messages.length > 0 ? setLoading(false) : setLoading(true);
	}, [messages]);

	return (
		<div className="min-h-[40vh] md:min-h-[60vh] my-6">
			{pageCount > 0 && (
				<h4 className="text-gray-200 mb-6 text-center">
					Page {pageNumber} of {pageCount}({messageLength} messages...)
				</h4>
			)}
			{messages
				.slice(
					(pageNumber - 1) * messagesPerPage,
					(pageNumber - 1) * messagesPerPage + messagesPerPage
				)
				.map((message: any, i: number) => (
					<Message key={i} message={message} />
				))}
			{messageLength < 1 && (
				<p className="text-center text-gray-200 text-xl px-2">
					You don't have any messages yet. Share your link to your friends and
					ask them to write something..
				</p>
			)}
			{pageCount > 1 && (
				<div className="flex justify-center">
					<ReactPaginate
						pageCount={pageCount}
						previousLabel={<BsChevronLeft color="white" />}
						nextLabel={<BsChevronRight color="white" />}
						onPageChange={changePage}
						containerClassName="flex items-center space-x-2 p-2"
						pageClassName="flex items-center justify-center p-2 w-8 h-8 text-md text-gray-200 cursor-pointer hover:border hover:border-purpleMain rounded-full"
						activeClassName="flex items-center justify-center p-2 bg-purpleDark text-gray-200 w-8 h-8 rounded-full cursor-pointer"
						breakClassName="text-gray-300"
						previousLinkClassName={"prevBtn"}
						nextLinkClassName={"nextBtn"}
						disabledClassName={"paginationDisabled text-gray-200"}
					/>
				</div>
			)}
		</div>
	);
};

export default MessagesWrapper;
