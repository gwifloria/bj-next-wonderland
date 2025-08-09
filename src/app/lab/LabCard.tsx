import { CheckOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { cardVariants, statusColor } from "./constant";
import { LabEntry } from "./type";
const isProd = process.env.NODE_ENV === "production";

const typeStyle = {
  issue: "bg-green-100 text-green-700",
  bug: "bg-red-100 text-red-700",
  idea: "bg-blue-100 text-blue-700",
};

interface LabCardProps extends LabEntry {
  onDelete: () => void;
  onStatusChange: (status: string) => void;
  onEdit: () => void;
}

export default function LabCard({
  id,
  title,
  type,
  status,
  tags,
  content,
  createdAt,
  onDelete,
  onStatusChange,
  onEdit,
}: LabCardProps) {
  return (
    <motion.div
      key={id}
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg p-5 border border-gray-100 transition-all duration-200 hover:border-mint-300 relative"
      variants={cardVariants}
      whileHover={{ y: -2 }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span
            className={`text-xs px-2 py-1 rounded font-medium ${typeStyle[type]}`}
            title={type === "issue" ? "待办" : type === "bug" ? "问题" : "想法"}
          >
            {type === "issue" && "📌"}
            {type === "bug" && "🐛"}
            {type === "idea" && "💡"}
          </span>
          <span className="text-lg font-semibold text-gray-800 group-hover:text-mint-600 transition-colors">
            {title}
          </span>
        </div>
        <span
          className={`text-xs px-2 py-1 rounded font-medium ${statusColor[status]}`}
        >
          {status === "open" && "open"}
          {status === "thinking" && "thinking"}
          {status === "resolved" && "resolved"}
        </span>
      </div>
      <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-3">
        {content}
      </p>
      <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-2">
        <span className="bg-gray-50 px-2 py-1 rounded">📅 {createdAt}</span>
        {tags?.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-gray-50 rounded hover:bg-mint-50 hover:text-mint-600 cursor-pointer transition"
          >
            #{tag}
          </span>
        ))}
      </div>
      {!isProd && (
        <div className="flex gap-2 text-sm mt-2">
          <button
            className="px-2 py-1 rounded hover:bg-mint-100 text-mint-600 flex items-center gap-1 border border-transparent hover:border-mint-300 transition"
            title="编辑"
            onClick={onEdit}
          >
            <EditOutlined /> 编辑
          </button>
          {status !== "resolved" && (
            <button
              className="px-2 py-1 rounded hover:bg-green-100 text-green-600 flex items-center gap-1 border border-transparent hover:border-green-300 transition"
              title="标记为已完成"
              onClick={() => onStatusChange("resolved")}
            >
              <CheckOutlined /> 完成
            </button>
          )}
        </div>
      )}

      {/* Delete button at bottom right, subtle and small */}
      {!isProd && (
        <button
          className="absolute bottom-3 right-3 p-1 w-7 h-7 flex items-center justify-center rounded-full text-gray-300 hover:text-red-500 hover:bg-red-50 transition
          opacity-50 hover:opacity-100 z-10"
          style={{ fontSize: 16 }}
          title="删除"
          onClick={onDelete}
        >
          <DeleteOutlined />
        </button>
      )}
    </motion.div>
  );
}
